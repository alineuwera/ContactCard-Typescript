import { User, Mail, Phone } from "lucide-react";

type ContactCardProps = {
  name: string;
  email: string;
  phone?: string;
};

function ContactCard({ name, email, phone }: ContactCardProps) {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl">
        <div className="mb-4 flex items-center">
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <User size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Mail className="mr-2 h-5 w-5 text-gray-500" />
            <span>{email}</span>
          </div>

          {phone && (
            <div className="flex items-center text-gray-600">
              <Phone className="mr-2 h-5 w-5 text-gray-500" />
              <span>{phone}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
