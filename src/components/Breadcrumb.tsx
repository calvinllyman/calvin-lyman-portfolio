interface BreadcrumbProps {
  items: {
    name: string
    href: string
  }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="py-4 bg-gray-50 border-b">
      <div className="container mx-auto px-6">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
              <a
                href={item.href}
                className={`${
                  index === items.length - 1
                    ? 'text-gray-900 font-semibold'
                    : 'text-blue-600 hover:text-blue-800'
                } transition-colors duration-200`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}