import Link from "next/link";

interface HomeProps {
  quizUrl?: string;
}

const Home: React.FC<HomeProps> = ({ quizUrl = "/quiz" }) => {
  return (
    <main>
      <div className="container">
        <h1>Quiz App</h1>
        {/* <Link href="/quiz"> */}
        <Link href={quizUrl}>
          <button>Start Quiz</button>
        </Link>
      </div>
    </main>
  );
};
export default Home;
