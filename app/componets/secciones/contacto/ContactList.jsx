import React from "react";
import ContactCard from "./card/ContactCard";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactList() {
  const contacts = [
    {
      icon: Mail,
      title: "Email",
      info: "info@tuempresa.com",
      link: "mailto:info@tuempresa.com",
      color: "bg-gradient-to-r from-cyan-100 to-blue-100"
    },
    {
      icon: Clock,
      title: "Horario",
      info: "Lun - Vie: 9:00 - 18:00",
      link: "#",
      color: "bg-gradient-to-r from-cyan-100 to-blue-100"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+1 234 567 890",
      link: "https://wa.me/1234567890",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="grid md:grid-cols-3 gap-6 justify-center">
        {contacts.map((item, index) => (
          <ContactCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
