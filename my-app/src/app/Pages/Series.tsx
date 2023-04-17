export default function Series() {
  return (
    <div>
      <div className="bg-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <h3 className="text-5xl font-bold text-white mb-2">
            Os mais vistos na categoria Series
          </h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-2/5 lg:w-1/3 px-4 mb-8">
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src="https://pipocamoderna.com.br/wp-content/uploads/2021/01/Black-Lightning-Season-4-Poster.jpg"
                    alt="Black Lightning"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                      Assistir agora
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/3 px-4 mb-8">
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src="https://img.elo7.com.br/product/original/26B5D5C/big-poster-serie-the-flash-lo06-tamanho-90x60-cm-nerd.jpg"
                    alt="The flash"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                      Assistir agora
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/5 lg:w-1/3 px-4 mb-8">
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src="https://br.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg"
                    alt="Arcane"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                      Assistir agora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
