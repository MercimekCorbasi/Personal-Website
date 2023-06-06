export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/956625660347031663/1115654239511916624/B3645CE9-DBC9-410C-9A5C-2ABC4422FC78.jpg",
      name: "Code Share",
      description: "Benim işte",
      link: "https://www.instagram.com/alikartalm/",
    },
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/737348411568685066/999563078079361074/YT_AVATAR_NET.jpg",
      name: "Youtube Channel",
      description: "Nam-ı değer mercimek",
      link: "https://www.instagram.com/alikartalm/",
    }
  ];
  res.status(200).json(data);
};
