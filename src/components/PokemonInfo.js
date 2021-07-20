import Card from "react-bootstrap/Card";
import PokemonContext from "../PokemonContext";
import { useContext } from "react";

export default function PokemonInfo() {
  const {
    state: { selectedPokemon: selected },
  } = useContext(PokemonContext);

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
