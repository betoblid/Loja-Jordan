
import logoJordan from "../../assets/logo-jordan.svg"
export const Header = () => {

    return (
        <header className="w-full">
            <div className="bg-[#F3F7FF]">
                <span className="font-semibold text-lg text-center block py-3">
                    Frete grátis para todo o Brasil
                </span>
            </div>

            <div className="bg-jordancap xl:min-h-[50vh] sm:min-h-[70vh] min-h-[60vh] bg-no-repeat bg-cover text-white flex xl:pl-20 sm:pl-10">

                <div className="flex flex-col items-center justify-center  w-[557px] gap-10">

                    <div className="flex items-center self-start">
                        <img src={logoJordan} alt="" className="size-7" />
                        <span className="text-lg font-medium">JordanShoes</span>
                    </div>

                    <div>
                        <h1 className="font-medium text-3xl mb-5 sm:text-2xl">
                            A melhor loja de Jordan
                            </h1>
                        <p className="font-normal xl:text-2xl leading-8 sm:text-lg">
                            O tênis Jordan é fruto de uma velha e forte
                            parceria entre a Nike e o jogador Michael Jordan.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}