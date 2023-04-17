export default function Sobre() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Planos de assinatura</h1>
          <p className="text-lg mb-4">
            Os preços mudam de região para região.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            <div className="bg-indigo-500  text-white overflow-hidden shadow rounded-lg">
              <div className="text-sm font-semibold truncate px-4 py-5">
                Combo Lobo Solitario
              </div>
              <p className="text-2xl font-medium text-gray-900 px-4 pb-5">
                Por: R$ 15,00
              </p>
              <p className="text-lg font-medium text-gray-900 px-4 pb-5">
                1 tela disponível.
              </p>
            </div>

            <div className="bg-indigo-500  text-white overflow-hidden shadow rounded-lg">
              <div className="text-sm font-semibold truncate px-4 py-5">
                Combo Familia
              </div>
              <p className="text-2xl font-medium text-gray-900 px-4 pb-5">
                Por: R$ 20,00
              </p>
              <p className="text-lg font-medium text-gray-900 px-4 pb-5">
                2 tela disponível.
              </p>
            </div>

            <div className="bg-indigo-500  text-white overflow-hidden shadow rounded-lg">
              <div className="text-sm font-semibold truncate px-4 py-5">
                Combo Fã entre os Fã
              </div>
              <p className="text-2xl font-medium text-gray-900 px-4 pb-5">
                Por: R$ 25,00
              </p>
              <p className="text-lg font-medium text-gray-900 px-4 pb-5">
                Telas ilimitadas.
              </p>
            </div>

            <div className="bg-indigo-500  text-white overflow-hidden shadow rounded-lg">
              <div className="text-sm font-semibold truncate px-4 py-5">
                Combo Solidario
              </div>
              <p className="text-2xl font-medium text-gray-900 px-4 pb-5">
                Por: R$ 25,00
              </p>
              <p className="text-lg font-medium text-gray-900 px-4 pb-5">
                3 tela disponível e parte do dinheiro doado a caridade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
