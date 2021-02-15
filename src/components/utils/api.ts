export type APIJob = {
  id: "number";
  type: "string";
  url: "string";
  // created_at: "Sat Feb 13 01:20:45 UTC 2021",
  company: "string";
  // company_url: null,
  location: "string";
  title: "string";
};

export async function getJob(location: string) {
  const response = await fetch(
    `https://jobs.github.com/positions.json?description=ruby&page=1/${location}`
  );
  if (!response.ok) {
    const result = await response.json();
    return {
      location: "Remote",
    };
  }
}
