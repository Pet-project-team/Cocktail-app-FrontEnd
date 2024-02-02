import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import fetchDataAPI from "./components/fetchDataAPI";
import { useCookies } from 'react-cookie';
// import { authenticateWithGoogle, refreshAccessToken } from './googleAPI';
// import { useAuth } from './AuthContext';

const postData = JSON.stringify({
  userId: 1,
  sthElse: 'dsakmndasokdmasokdmqdokqwmdokwq',
  qwedfmokURL: 'https://dsakmldsadmasod.daslkmpd',
})

console.log(fetchDataAPI('https://httpbin.org/post','POST',{},postData));

const BASE_URL = 'https://backend';

async function getAccessToken(credentialResponse) {
  try {
    const response = await fetch(`${BASE_URL}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ credentialResponse }),
    });

    if (!response.ok) {
      throw new Error('Authentication failed');
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error during authentication:', error.message);
    throw error;
  }
}

// const { isAuthenticated, accessToken, login, logout } = useAuth();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // Перевірка наявності токену при завантаженні компонента
//         if (accessToken) {
//           // Виклик функції взаємодії з бекендом з переданим токеном
//           // (якщо потрібно виконати які-небудь додаткові дії)
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [accessToken]);

//   const handleLoginSuccess = async (googleAccessToken) => {
//     try {
//       // Виклик функції взаємодії з бекендом
//       const userData = await authenticateWithGoogle(googleAccessToken);

//       // Збереження та оновлення токену та статусу авторизації через контекст
//       login(googleAccessToken);

//       // Додаткові дії з отриманими даними
//       console.log('User data:', userData);
//     } catch (error) {
//       // Обробка помилок взаємодії з бекендом
//       console.error('Authentication error:', error.message);
//     }
//   };

//   const handleTokenRefresh = async () => {
//     try {
//       setLoading(true);

//       // Оновлення токену доступу через рефреш-токен
//       const { accessToken: newAccessToken } = await refreshAccessToken(accessToken);

//       // Оновлення токену в контексті
//       login(newAccessToken);
//     } catch (error) {
//       // Обробка помилок оновлення токену
//       console.error('Token refresh error:', error.message);
//       logout();
//     } finally {
//       setLoading(false);
//     }
//   };

function App() {
  const [cookies, setCookie] = useCookies(['session']);

  console.log(cookies);
  return (
    <div className="App">
      <Header 
      setCookie={setCookie}
      getAccessToken={getAccessToken}
       />
      {/* {isAuthenticated && (
        <button onClick={handleTokenRefresh} disabled={loading}>
          {loading ? 'Refreshing...' : 'Refresh Token'}
        </button>
      )} */}
      <Main />
    </div>
  );
}

export default App;
