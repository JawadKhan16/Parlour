'use client';

import Image from 'next/image';

const teamMembers = [
  { name: 'Aisha Khan', role: 'Founder & Nail Artist', img: '/Team/aisha.jpeg' },
  { name: 'Zikra Khan', role: 'Hair Stylist', img: '/Team/zikra.jpeg' },
  { name: 'Sakshi Jadhav', role: 'Makeup Artist', img: '/Team/sakshi.jpg' }
];

const Team = () => {
  return (
    <section className="w-full bg-gray-900 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Meet Our Experts</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-64">
              <Image src={member.img} alt={member.name} width={150} height={150} className="rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
