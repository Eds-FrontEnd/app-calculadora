import { useCallback, useEffect, useState } from "react";
import { Container, Content, Row } from "./Styles/Container";
import Button from "./components/Button/Button";
import VisorInput from "./components/VisorInput/VisorInput";

function App() {
  const [expression, setExpression] = useState("");
  const [isResult, setIsResult] = useState(false);

  const handleAddToExpression = useCallback(
    (value: string) => {
      if (isResult) {
        setExpression(value);
        setIsResult(false);
        return;
      }

      if (
        (value === "+" || value === "-" || value === "*" || value === "/") &&
        (expression === "" ||
          ["+", "-", "*", "/"].includes(expression.slice(-1)))
      ) {
        return;
      }

      if (expression === "0" && value === "0") {
        return;
      }

      if (expression === "0" && value !== "0") {
        setExpression(value);
        return;
      }

      setExpression((prev) => prev + value);
    },
    [expression, isResult]
  );

  const handleClear = useCallback(() => {
    setExpression("");
    setIsResult(false);
  }, []);

  const handleEquals = useCallback(() => {
    if (expression !== "" && expression !== undefined && expression !== null) {
      if (["+", "-", "*", "/"].includes(expression.slice(-1))) {
        setExpression("Ops, tente novamente...");
        return;
      }

      try {
        const result = eval(expression);
        setExpression(String(result));
        setIsResult(true);
      } catch (error) {
        setExpression("Ops, algo deu errado..." + error);
      }
    }
  }, [expression]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;

      // Prevenir que a tecla Enter envie o formulário
      if (key === "Enter") {
        event.preventDefault(); // Evita o envio do formulário (se houver)
        handleEquals(); // Aciona a lógica de igual
      }

      if (key >= "0" && key <= "9") {
        handleAddToExpression(key); // Números
      } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        handleAddToExpression(key); // Operadores
      } else if (key === "=" || key === "Enter") {
        handleEquals(); // Resultado
      } else if (key === "Backspace") {
        handleClear(); // Limpar
      }
    },
    [handleAddToExpression, handleClear, handleEquals]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Container>
      <Content>
        <VisorInput value={expression || "0"} />
        <Row>
          <Button label="." onClick={() => handleAddToExpression(".")} />
          <Button label="0" onClick={() => handleAddToExpression("0")} />
          <Button label="C" onClick={handleClear} />
          <Button label="/" onClick={() => handleAddToExpression("/")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddToExpression("7")} />
          <Button label="8" onClick={() => handleAddToExpression("8")} />
          <Button label="9" onClick={() => handleAddToExpression("9")} />
          <Button label="-" onClick={() => handleAddToExpression("-")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddToExpression("4")} />
          <Button label="5" onClick={() => handleAddToExpression("5")} />
          <Button label="6" onClick={() => handleAddToExpression("6")} />
          <Button label="+" onClick={() => handleAddToExpression("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddToExpression("1")} />
          <Button label="2" onClick={() => handleAddToExpression("2")} />
          <Button label="3" onClick={() => handleAddToExpression("3")} />
          <Button label="*" onClick={() => handleAddToExpression("*")} />
        </Row>
        <Row>
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
