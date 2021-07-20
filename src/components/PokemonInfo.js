import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

export default function PokemonInfo() {
  const selected = useSelector((state) => state.selectedPokemon);

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
