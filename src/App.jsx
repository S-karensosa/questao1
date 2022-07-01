import "./App.css"
import Plano from "./Plano";

function App() {
	const planos = [
		{
			title: "Start",
			price: "Free",
			qnt_users: "1 user",
			qnt_projects: "1 project",
		},

		{
			title: "Basic",
			price: "$19.99",
			qnt_users: "5 user",
			qnt_projects: "20 project",
			tipo: "ativo",
		},

		{
			title: "Expert",
			price: "129,99",
			qnt_users: " inlimited users",
			qnt_projects: "ilimited project",
			
		},

	];



	return (
		<div className="divpai">
			{planos.map((plano) => {
				return <Plano
					titulo={plano.title}
					preco={plano.price}
					usuarios={plano.qnt_users}
					projetos={plano.qnt_projects}
					tipo={plano.tipo} />
			})}

		</div>
	);
}


export default App;
