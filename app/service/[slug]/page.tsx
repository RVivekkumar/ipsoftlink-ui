export function generateStaticParams() {
  return [
    { slug: 'software-development' },
    { slug: 'mobile-app-development' },
    { slug: 'digital-marketing' },
    { slug: 'erp-solutions' },
    { slug: 'it-consulting' },
    {slug: 'crm-solutions'}
  ]
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">Service: {params.slug}</h1>
        <p className="text-lg text-gray-600">
          Service details for {params.slug} will be available soon.
        </p>
      </div>
    </div>
  );
}