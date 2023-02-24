import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  }, [navigate]);

  return (
    <h1 style={{ textAlign: "center", padding: 50 }}>
      😔 Тут ничего нет, перенаправляем вас...
    </h1>
  );
};

export default NotFound;
