import Link from "next/link";

const properties = [
  {
    id: 1,
    slug: "luxury-villa-delhi",
    title: "Luxury Villa Delhi",
    price: "₹1.2 Cr",
  },
  {
    id: 2,
    slug: "modern-apartment-noida",
    title: "Modern Apartment Noida",
    price: "₹85 Lac",
  },
];

export default function PropertiesPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Properties
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border p-4 rounded"
          >
            <h2>{property.title}</h2>

            <p>{property.price}</p>

            <Link
              href={`/properties/${property.slug}`}
              className="text-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}