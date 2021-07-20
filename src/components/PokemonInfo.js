import Card from "react-bootstrap/Card";
import useStore from "./../store";

export default function PokemonInfo() {
  const selected = useStore((state) => state.selectedPokemon);

  return selected != null ? (
    <Card>
      <Card.Header>{selected.name.english}</Card.Header>
      <Card.Body>
        <table>
          <tbody>
            {Object.entries(selected.base).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  ) : null;
}
