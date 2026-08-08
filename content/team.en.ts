export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string | null;
};

// TODO: replace with real data (name, role, bio, photo)
export const team: TeamMember[] = [
  { name: "Name TBD", role: "CEO", bio: "Profile coming soon.", photo: null },
  { name: "Name TBD", role: "CTO", bio: "Profile coming soon.", photo: null },
  { name: "Name TBD", role: "Product Lead", bio: "Profile coming soon.", photo: null },
];
