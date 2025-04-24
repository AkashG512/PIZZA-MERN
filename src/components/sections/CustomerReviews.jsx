import React from 'react';

const CustomerReviews = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Customer Reviews</h2>
        <div className="flex justify-center gap-8">
          <div className="border p-4 rounded-lg shadow-lg">
            <p className="text-lg italic">"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."</p>
            <p className="mt-4 font-semibold">Jay Lorg</p>
            <p className="text-sm text-gray-500">Founder of Cie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;