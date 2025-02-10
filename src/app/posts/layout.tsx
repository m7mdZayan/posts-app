export const metadata = {
  title: "Post Page",
  description: "a page that shows the details of the post",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
