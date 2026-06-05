export default function InquiryPage() {
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Property Inquiry
      </h1>

      <form className="space-y-4">
        <input
          placeholder="Name"
          className="border p-2 w-full"
        />

        <input
          placeholder="Email"
          className="border p-2 w-full"
        />

        <input
          placeholder="Phone"
          className="border p-2 w-full"
        />

        <textarea
          placeholder="Message"
          className="border p-2 w-full"
        />

        <button
          className="bg-blue-600 text-white p-2 w-full"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}