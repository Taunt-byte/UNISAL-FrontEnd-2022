export default function Filmes() {
  return (
    <div>
      <div className="bg-indigo-900">
        <div className="container mx-auto px-4 py-16">
        <h3 className="text-5xl font-bold text-white mb-2">
          Os mais vistos na categoria Filmes
        </h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-2/5 lg:w-1/3 px-4 mb-8">
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src="https://br.web.img2.acsta.net/pictures/22/05/18/09/51/0772429.jpg"
                    alt="Filme 1"
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
                    src="https://www.atoupeira.com.br/wp-content/uploads/2023/01/shazam-furia-dos-deuses-poster.jpg"
                    alt="Shazam 2"
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
                    src="https://s2.glbimg.com/5SqLH8KSDmpKQ7NtiaINtNp3Yyg=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2023/r/2/2FQnTHRBW4GF6ytUMUAw/snapinsta.app-340307740-790180952108548-3504768321682167194-n-1080.jpg"
                    alt="The Mother"
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
  )
}
