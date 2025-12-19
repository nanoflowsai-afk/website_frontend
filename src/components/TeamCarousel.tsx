"use client";

import { SafeImage } from "@/components/SafeImage";
import { normalizeImageUrl } from "@/lib/images";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  avatarUrl: string;
  isActive: boolean;
  displayOrder: number;
};

export function TeamCarousel({ team }: { team: TeamMember[] }) {
  if (team.length === 0) {
    return (
      <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-500">
        Add team members in the admin panel to showcase your team.
      </div>
    );
  }

  const duplicatedTeam = [...team, ...team];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div
        className="flex gap-6 animate-[scroll-left_75s_linear_infinite] hover:[animation-play-state:paused]"
        style={{
          width: `${duplicatedTeam.length * 344}px`,
        }}
      >
        {duplicatedTeam.map((member, index) => (
          <div
            key={`${member.id}-${index}`}
            className="flex-shrink-0 w-[320px] rounded-2xl border border-gray-100 bg-white p-6 transition-transform hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <SafeImage
                src={normalizeImageUrl(member.avatarUrl)}
                alt={member.name}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-orange-200"
                fallbackText={member.name.charAt(0).toUpperCase()}
              />
              <div>
                <div className="text-lg font-semibold text-gray-900">{member.name}</div>
                <div className="text-sm text-orange-600">{member.role}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 line-clamp-3">{member.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {member.expertise.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-orange-50 px-2.5 py-1 text-xs text-orange-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}
