import { MenuButton, Button } from '../Button';
import { MenuIcon, PythonIcon, JSIcon } from '../Icons';
import { classNames } from 'utils';

const Header = ({ title, version, state, callback }) => {
    return (
        <header className="w-full h-full bg-gray-800 text-white flex justify-between items-center gap-4 py-4 xl:px-6 px-2">
            <div className="h-full flex justify-start items-center gap-4">
                <div className="text-lg font-bold">{title}</div>
                <div className="bg-gray-600 text-gray-200 rounded-md px-2 py-1 font-semibold xl:text-base text-sm">v{version}</div>
            </div>
            <div className="flex justify-end items-center">
                <Button callback={() => callback(prev => !prev)}>
                    <PythonIcon className={classNames(state ? "hidden" : "", "w-4 h-4 text-white")} />
                    <JSIcon className={classNames(state ? "" : "hidden", "w-4 h-4 text-white")} />
                </Button>
                <MenuButton className="block xl:hidden">
                    <MenuIcon className="w-8 h-8 " />
                </MenuButton>
            </div>
        </header>
    );
}

export default Header;