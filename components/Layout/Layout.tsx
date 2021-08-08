import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="flex container mx-auto">
      { children }
    </div>
  )
}