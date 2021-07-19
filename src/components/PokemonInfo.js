import Card from "react-bootstrap/Card";

export default function PokemonInfo({ name, base }) {
  return (
    <Card>
      <Card.Header>{name.english}</Card.Header>
      <Card.Body>
        <table>
          <tbody>
            {Object.entries(base).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
}
