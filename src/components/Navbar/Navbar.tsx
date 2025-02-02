import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="bg-main border-2 h-16 flex items-center p-8">
      <Link to="/" className="font-heading text-xl transition-transform hover:scale-110">
        Francis
      </Link>
      <div className="flex grow justify-end gap-8">
        <Link to="/projects" className="font-heading text-l transition-transform hover:scale-110">
          Projects
        </Link>
        <Link to="/posts" className="font-heading text-l transition-transform hover:scale-110">
          Posts
        </Link>
        <Link to="/contact" className="font-heading text-l transition-transform hover:scale-110">
          Contact
        </Link>
      </div>
    </div>
  )
}

export { Navbar }
