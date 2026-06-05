interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyDetails({
  params,
}: Props) {
  const { slug } = await params;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">
        Property Details
      </h1>

      <p className="mt-4">
        Property Slug: {slug}
      </p>

      <div className="mt-6">
        <h2>Description</h2>
        <p>
          Beautiful property located in prime area.
        </p>
      </div>
    </div>
  );
}