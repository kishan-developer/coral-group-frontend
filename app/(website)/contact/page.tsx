import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Coral Group | Real Estate, Hotels & Business Enquiry in Varanasi",
  description: "Contact Coral Group in Varanasi for real estate, hospitality, business partnerships, customer support, and service enquiries.",
  alternates: {
    canonical: "https://coral-group.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Coral Group",
            url: "https://coral-group.in",
            email: "info@coral-group.in",
            telephone: "+91 7800000097",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5th Floor, Tower C, Vinayak Plaza, Maldahiya",
              addressLocality: "Varanasi",
              addressRegion: "Uttar Pradesh",
              postalCode: "221002",
              addressCountry: "IN"
            },
            sameAs: [
              "https://www.instagram.com/coralgroupoff/",
              "https://www.facebook.com/coralgroupoff",
              "https://www.youtube.com/@coralgroupoff",
              "https://www.linkedin.com/company/coralgroupoff"
            ]
          }),
        }}
      />
      <ContactClient />
    </>
  );
}
