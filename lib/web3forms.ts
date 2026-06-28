"use client";

const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

export const SERVICE_RECIPIENTS: Record<string, string> = {
  "Software Development": "bd@IPsoftlink.com",
  "Mobile App Development": "bd@IPsoftlink.com",
  "IT Consulting": "bd@IPsoftlink.com",
  Other: "bd@IPsoftlink.com",
};

export const CONSULTATION_RECIPIENT = "bd@IPsoftlink.com";

export type SubmitWeb3FormOptions = {
  subject: string;
  fromName?: string;
  routeTo?: string;
  formType?: string;
};

export type Web3FormResult = {
  success: boolean;
  message?: string;
};

function getAccessKey(): string {
  return (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "").trim();
}

async function fileToBase64(file: File): Promise<{ data: string; name: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.includes(",") ? result.split(",")[1] : result;
      resolve({ data: base64, name: file.name });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function buildPayload(
  form: HTMLFormElement,
  options: SubmitWeb3FormOptions
): Promise<Record<string, string>> {
  const accessKey = getAccessKey();
  const formData = new FormData(form);
  const payload: Record<string, string> = {};

  for (const [key, value] of formData.entries()) {
    if (key === "terms") continue;

    // if (value instanceof File) {
    //   if (value.size === 0) continue;
    //   const { data, name } = await fileToBase64(value);
    //   payload.attachment = data;
    //   payload.attachment_name = name;
    //   continue;
    // }

    if (typeof value === "string" && value.trim()) {
      payload[key] = value.trim();
    }
  }

  payload.access_key = accessKey;
  payload.subject = options.subject;
  payload.from_name = options.fromName ?? "IP Softlink Website";

  if (options.formType) {
    payload.form_type = options.formType;
  }

  if (options.routeTo) {
    payload.concern_person = options.routeTo;
  }

  if (payload.email) {
    payload.replyto = payload.email;
  }

  return payload;
}

export async function submitWeb3Form(
  form: HTMLFormElement,
  options: SubmitWeb3FormOptions
): Promise<Web3FormResult> {
  if (!getAccessKey()) {
    return {
      success: false,
      message:
        "Form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env and restart the dev server.",
    };
  }

  try {
    const payload = await buildPayload(form, options);

    const response = await fetch(WEB3FORMS_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    let data: { success?: boolean; message?: string };

    try {
      data = JSON.parse(responseText);
    } catch {
      console.error("Web3Forms non-JSON response:", responseText.slice(0, 200));
      return {
        success: false,
        message: "Form service returned an unexpected response. Please try again.",
      };
    }

    if (data.success) {
      return { success: true };
    }

    console.error("Web3Forms Error:", data);
    return {
      success: false,
      message: data.message || "Something went wrong. Please try again.",
    };
  } catch (error) {
    console.error("Submission Error:", error);
    return {
      success: false,
      message: "Unable to send message. Please check your internet connection.",
    };
  }
}

export function getServiceRecipient(service: string): string {
  return SERVICE_RECIPIENTS[service] ?? "bd@IPsoftlink.com";
}
