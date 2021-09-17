import { Button } from '../components/Button';

interface GenreProps {
  gen: Array<{
      id: number;
      title: string;
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    }>,
  clickMenuItem: Function;   
  selectedGenreId: number;
}
   
export function SideBar(props: GenreProps | undefined) {
  // Complete aqui
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props?.gen ? props.gen.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.clickMenuItem(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          )) : <div/> }
        </div>

      </nav>
  )
}