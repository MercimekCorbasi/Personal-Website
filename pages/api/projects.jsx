export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/956625660347031663/1115664228888608788/19397F38-F554-4852-A6D8-FCB814569C25.jpg",
      name: "bad boy, pussy magnet",
      description: "Buyrun benim",
      link: "https://www.instagram.com/alikartalm/",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/956625660347031663/1115664229261914122/B3645CE9-DBC9-410C-9A5C-2ABC4422FC78.jpg",
      name: "karizma focus, o baby",
      description: "Nam-ı değer mercimek",
      link: "https://www.instagram.com/alikartalm/",
    }
  ];
  res.status(200).json(data);
};
