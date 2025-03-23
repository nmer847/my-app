import { useState, FormEvent } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (username === "tiger" && password === "123") {
      alert("تم الدخول بنجاح!");
      window.location.href = "web16.html";
    } else {
      alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/imgGun1.webp")' }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <div className="mb-6">
          <img
            src="/imgGun1.webp"
            alt="Military-themed image"
            className="w-full rounded-lg"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          برنامج الرماية عن بعد
        </h1>

        <form onSubmit={handleSubmit} className="text-right">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 mb-2">
              اسم المستخدم:
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-right"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              كلمة المرور:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-right"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            دخول
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          ليس لديك حساب؟{" "}
          <a href="#" className="text-green-600 hover:underline">
            سجل هنا
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
