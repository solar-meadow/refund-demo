import { useState } from 'react';
import { FaUserCheck, FaChevronDown, FaClipboardList } from 'react-icons/fa';
import { MdFolder, MdSecurity } from 'react-icons/md';
import LionIcon from './logo.png';
export default function Sidebar({ onNavigate, activePage }) {
    const [isExpanded, setExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const buttonClass = (key) =>
        `flex items-center gap-2 rounded px-2 py-2 cursor-pointer transition ${
            activePage === key
                ? 'bg-[#1f3250] text-white'
                : 'text-gray-300 hover:bg-[#1f3250]'
        }`;

    return (
        <div
            className={`bg-[#0c1e3a] text-white transition-all duration-500 ease-in-out ${
                isExpanded ? 'w-64' : 'w-16'
            } p-4 h-screen`}
        >
            <div className="flex justify-between items-center mb-6">
                {isExpanded && !isMobile ? (
                    <h2 className="text-lg font-bold whitespace-nowrap">
                        Invictus
                    </h2>
                ) : (
                    <img
                        src={LionIcon}
                        alt="Invictus Lion"
                        className="h-8 w-8"
                    />
                )}
                <button
                    onClick={() => setExpanded(!isExpanded)}
                    className="text-gray-300 hover:text-white"
                >
                    <FaChevronDown
                        className={`transform transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                        }`}
                    />
                </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl">
                    a
                </div>
                {isExpanded && (
                    <div>
                        <p className="font-medium">Abdurahman Tanatar</p>
                        <p className="text-blue-400 text-sm">superadmin</p>
                    </div>
                )}
            </div>

            <div
                onClick={() => onNavigate('clients')}
                className={buttonClass('clients')}
            >
                <FaUserCheck />
                {isExpanded && <span className="text-sm">Клиенты</span>}
            </div>

            <div
                onClick={() => onNavigate('refunds')}
                className={buttonClass('refunds')}
            >
                <MdFolder />
                {isExpanded && <span className="text-sm">Возвраты</span>}
            </div>

            <div
                onClick={() => onNavigate('access')}
                className={buttonClass('access')}
            >
                <MdSecurity />
                {isExpanded && <span className="text-sm">В доступы</span>}
            </div>

            <div
                onClick={() => onNavigate('orders')}
                className={buttonClass('orders')}
            >
                <FaClipboardList />
                {isExpanded && <span className="text-sm">Заказы</span>}
            </div>
        </div>
    );
}
