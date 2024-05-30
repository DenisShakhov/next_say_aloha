import Image from "next/image"
import useStore from "../store/useStore"

export default function RegisterComponent(){
    const {setLogging, setRegistred, setOpenLogingWindow} = useStore()
    return(<>
    
    <div className="fixed h-screen top-0 inset-0 flex justify-center items-center">
          <div className="w-[457px] relative flex flex-col items-center justify-start h-[627px] rounded-3xl p-[90px] bg-white">
            <div onClick={()=>{setOpenLogingWindow(false)}} className="absolute cursor-pointer top-6 right-6"><Image src={`/img/cross_black.svg`} width={20} height={20}/></div>
            <div className="flex w-full text-[20px] font-bold items-center justify-between">
              <div onClick={() => {setLogging(true)}}  className={`text-black cursor-pointer`}>ВХОД</div>
              <div className={`text-blue cursor-pointer`}>РЕГИСТРАЦИЯ</div>
            </div>
            <div className="flex flex-col w-full items-center justify-start">
            <div className="relative w-full mt-[40px]">
                <div className="absolute top-2 left-[20px] text-[10px] text-blue">Имя</div>
                <input placeholder="Софья" type="text" className="w-full text-[12px] pt-2 pl-[20px] bg-light-blue rounded-3xl h-[55px] "/>
              </div>
              <div className="relative w-full mt-[5px]">
                <div className="absolute top-2 left-[20px] text-[10px] text-blue">Фамилия</div>
                <input placeholder="Константинова" type="email" className="w-full text-[12px] pt-2 pl-[20px] bg-light-blue rounded-3xl h-[55px] "/>
              </div>
              <div className="relative w-full mt-[5px]">
                <div className="absolute top-2 left-[20px] text-[10px] text-blue">E-mail</div>
                <input placeholder="turkish.sweetshop@gmail.com" type="email" className="w-full text-[12px] pt-2 pl-[20px] bg-light-blue rounded-3xl h-[55px] "/>
              </div>
              <div className="relative w-full mt-[5px]">
                <div className="absolute top-2 left-[20px] text-[10px] text-blue">Пароль</div>
                <input placeholder="password" type="password" className="w-full text-[12px] pt-2 pl-[20px] bg-light-blue rounded-3xl h-[55px] "/>
              </div>
            </div>
            <div className="w-full ml-1 flex items-center mt-[15px] justify-start">
              <input type="checkbox"/>
              <div className="ml-[10px] text-[12px]">Запомнить меня</div>
            </div>
            <button className="w-full h-[50px] font-bold text-[16px] mt-[20px] rounded-3xl  bg-blue text-white flex items-center justify-center">
            Войти
            </button>
            <div className="mt-[10px] w-full h-[1px] bg-[#404b5a] opacity-50"></div>
            <div className="mt-[5px] text-[12px] hover:text-blue cursor-pointer">Забыли пароль?</div>
          </div>
        </div>
    
    </>)
}