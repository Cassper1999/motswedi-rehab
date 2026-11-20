const website = "https://www.motswedirehabcentre.com";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": website + "/#organization",
      name: "Motswedi Rehabilitation Centre",
      url: website,
      logo: website + "/logos/motswedilogo-transparent.png",
      description:
        "Rehabilitation, physiotherapy, education support and vocational skills training in Mochudi, Botswana.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mochudi",
        addressCountry: "BW",
      },
    },
    {
      "@type": "WebSite",
      "@id": website + "/#website",
      url: website,
      name: "Motswedi Rehabilitation Centre",
      publisher: {
        "@id": website + "/#organization",
      },
    },
  ],
};
export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
