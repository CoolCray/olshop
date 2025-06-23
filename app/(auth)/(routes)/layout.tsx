export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-gray-100">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}