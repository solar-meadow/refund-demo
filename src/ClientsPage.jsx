import React, { useState } from 'react';
import Sidebar from './Sidebar';
import {
    FaEdit,
    FaTrash,
    FaUndo,
    FaBoxOpen,
    FaMoneyBillWave,
    FaRegFileAlt,
    FaCheckCircle,
    FaRegImage,
} from 'react-icons/fa';

/* ------------------------------------------------------------------
  Константы и начальные данные
------------------------------------------------------------------*/
export const refundStatuses = [
    'Одобрен к возврату',
    'Возврат - На рассмотрении',
    'Возврат - На рассмотрении CLO',
    'Возврат оформлен',
    'Отклонен',
];

const currentUser = 'Abdurahman Tanatar';

const mockClients = [
    {
        id: 1,
        name: 'Abdurahman',
        phone: '+7700•••1078',
        status: 'Активный',
        transactions: [
            {
                id: 'TXN-001',
                providerId: 'PRV-1345',
                source: 'Mobile',
                provider: 'Kaspi',
                date: '2025-05-02',
                name: 'Годовой',
                type: 'Абонемент',
                price: 199000,
                charged: 199000,
                club: 'Invictus GO Turan',
                status: 'Оплачен',
                method: 'Смешанный',
                card: '4400 1234 5678 9010',
            },
            {
                id: 'TXN-221',
                providerId: 'PRV-1345',
                source: 'Mobile',
                provider: 'Kaspi',
                date: '2025-05-02',
                name: 'Носки',
                type: 'Merch',
                price: 1500,
                charged: 1500,
                club: 'Invictus GO Turan',
                status: 'Оплачен',
                method: 'Смешанный',
                card: '4400 1234 5678 9010',
            },
            {
                id: 'TXN-002',
                providerId: 'PRV-2002',
                source: 'Mobile',
                provider: 'Kaspi',
                date: '2025-05-01',
                name: 'Абонемент 3',
                type: 'Абонемент',
                price: 90000,
                charged: 90000,
                club: 'Invictus Fitness',
                status: 'Неуспешный',
                method: 'Карта',
                card: '4400 1234 5678 9010',
            },
            {
                id: 'TXN-005',
                providerId: 'PRV-2004',
                source: 'Mobile',
                provider: 'Kaspi',
                date: '2025-05-05',
                name: 'Футболка Invictus Fitness',
                type: 'Merch',
                price: 15000,
                charged: 15000,
                club: 'Invictus Fitness Green Mall',
                status: 'Оплачен',
                method: 'Карта',
                card: '4400 1234 5678 9010',
            },
            {
                id: 'TXN-006',
                providerId: 'PRV-2005',
                source: 'Mobile',
                provider: 'PayBox',
                date: '2025-05-06',
                name: 'Протеин Gold Standard',
                type: 'supplements',
                price: 25000,
                charged: 25000,
                club: 'Invictus Fitness Green Mall',
                status: 'Оплачен',
                method: 'Карта',
                card: '4556 7890 1234 5678',
            },
        ],
    },
    {
        id: 2,
        name: 'Фархад ',
        phone: '+7701•••1234',
        status: 'Активный',
        transactions: [
            {
                id: 'TXN-0010',
                providerId: 'PRV-2005',
                source: 'Mobile',
                provider: 'PayBox',
                date: '2025-05-06',
                name: 'Протеин Gold Standard',
                type: 'supplements',
                price: 25000,
                charged: 25000,
                club: 'Invictus Fitness Green Mall',
                status: 'Оплачен',
                method: 'Карта',
                card: '4556 7890 1234 5678',
            },
        ],
    },
    {
        id: 3,
        name: 'Тамерлан ',
        phone: '+7701•••1234',
        status: 'Активный',
        transactions: [
            {
                id: 'TXN-011',
                providerId: 'PRV-2005',
                source: 'Mobile',
                provider: 'PayBox',
                date: '2025-05-06',
                name: 'Протеин Gold Standard',
                type: 'supplements',
                price: 25000,
                charged: 25000,
                club: 'Invictus Fitness Green Mall',
                status: 'Оплачен',
                method: 'Карта',
                card: '4556 7890 1234 5678',
            },
        ],
    },
    {
        id: 4,
        name: 'Арай ',
        phone: '+7701•••1234',
        status: 'Активный',
        transactions: [
            {
                id: 'TXN-012',
                providerId: 'PRV-2005',
                source: 'Mobile',
                provider: 'PayBox',
                date: '2025-05-06',
                name: 'Протеин Gold Standard',
                type: 'supplements',
                price: 25000,
                charged: 25000,
                club: 'Invictus Fitness Green Mall',
                status: 'Оплачен',
                method: 'Карта',
                card: '4556 7890 1234 5678',
            },
        ],
    },
    {
        id: 5,
        name: 'Сая ',
        phone: '+7701•••1234',
        status: 'Активный',
        transactions: [
            {
                id: 'TXN-013',
                providerId: 'PRV-2005',
                source: 'Mobile',
                provider: 'PayBox',
                date: '2025-05-06',
                name: 'Протеин Gold Standard',
                type: 'supplements',
                price: 25000,
                charged: 25000,
                club: 'Invictus Fitness Green Mall',
                status: 'Оплачен',
                method: 'Карта',
                card: '4556 7890 1234 5678',
            },
        ],
    },
    {
        id: 6,
        name: 'Акзер ',
        phone: '+7701•••1234',
        status: 'Активный',
        transactions: [
            {
                id: 'TXN-014',
                providerId: 'PRV-2005',
                source: 'Mobile',
                provider: 'PayBox',
                date: '2025-05-06',
                name: 'Протеин Gold Standard',
                type: 'supplements',
                price: 25000,
                charged: 25000,
                club: 'Invictus Fitness Green Mall',
                status: 'Оплачен',
                method: 'Карта',
                card: '4556 7890 1234 5678',
            },
        ],
    },
    {
        id: 7,
        name: 'Руслан ',
        phone: '+7701•••1234',
        status: 'Активный',
        transactions: [
            {
                id: 'TXN-016',
                providerId: 'PRV-2005',
                source: 'Mobile',
                provider: 'PayBox',
                date: '2025-05-06',
                name: 'Протеин Gold Standard',
                type: 'supplements',
                price: 25000,
                charged: 25000,
                club: 'Invictus Fitness Green Mall',
                status: 'Оплачен',
                method: 'Карта',
                card: '4556 7890 1234 5678',
            },
        ],
    },
    {
        id: 8,
        name: 'Дмитрий',
        phone: '+7701•••1234',
        status: 'Активный',
        transactions: [
            {
                id: 'TXN-017',
                providerId: 'PRV-2005',
                source: 'Mobile',
                provider: 'PayBox',
                date: '2025-05-06',
                name: 'Протеин Gold Standard',
                type: 'supplements',
                price: 25000,
                charged: 25000,
                club: 'Invictus Fitness Green Mall',
                status: 'Оплачен',
                method: 'Карта',
                card: '4556 7890 1234 5678',
            },
        ],
    },
];

/* ------------------------------------------------------------------
  Компонент
------------------------------------------------------------------*/
export default function ClientsPage() {
    /* ---------------------- state ---------------------- */
    const [clients, setClients] = useState(mockClients);
    const [activePage, setActivePage] = useState('clients');
    const [selectedClient, setSelectedClient] = useState(null);
    const [permissions, setPermissions] = useState({
        refund: true,
        extendedAccess: true,
        statusEdit: {
            'Одобрен к возврату': true,
            'Возврат - На рассмотрении': true,
            'Возврат - На рассмотрении CLO': true,
            'Возврат оформлен': true,
            Отклонен: true,
        },
        statusView: {
            'Одобрен к возврату': true,
            'Возврат - На рассмотрении': true,
            'Возврат - На рассмотрении CLO': true,
            'Возврат оформлен': true,
            Отклонен: true,
        },
        orders: {
            view: true,
            statusEdit: {
                'Ожидаем курьеру': true,
                'Передали курьеру': true,
                'Заказ получен': true,
                Отклонен: true,
            },
        },
    });
    const [showRefundModal, setShowRefundModal] = useState(false);
    const [refundTxn, setRefundTxn] = useState(null);
    const [refundAmount, setRefundAmount] = useState('');
    const [refundReason, setRefundReason] = useState('');
    const [bankDetails, setBankDetails] = useState({
        account: '',
        fullName: '',
        iin: '',
        bank: '',
    });
    const [clientBankDetails, setClientBankDetails] = useState({
        account: '',
        fullName: '',
        iin: '',
        bank: '',
    });
    const [refunds, setRefunds] = useState([]);
    const [filterStatus, setFilterStatus] = useState('');
    const [merchChecklist, setMerchChecklist] = useState([
        false,
        false,
        false,
        false,
    ]);
    const [supplementsChecklist, setSupplementsChecklist] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    const [attachedFile, setAttachedFile] = useState(null);
    const [refundMethod, setRefundMethod] = useState('cash');
    const [productPhoto, setProductPhoto] = useState(null);
    const [orders, setOrders] = useState([]);
    const [returnToMainWarehouse, setReturnToMainWarehouse] = useState(false);
    const [orderModal, setOrderModal] = useState({
        open: false,
        orderId: null,
        invoice: '',
    });
    const [editOrderNumber, setEditOrderNumber] = useState({
        id: null,
        value: '',
    });

    const disabledTxnStatuses = [
        'Неуспешный',
        'В ожиданий',
        'Внутренняя ошибка',
    ];

    /* ------------------ helpers ------------------ */
    const updateClientTransactions = (clientId, updater) => {
        setClients((prev) =>
            prev.map((cl) =>
                cl.id === clientId
                    ? { ...cl, transactions: updater(cl.transactions) }
                    : cl
            )
        );
    };

    const statusColor = (st) =>
        st === 'Оплачен' ||
        st === 'Одобрен к возврату' ||
        st === 'Возврат оформлен'
            ? 'text-green-600'
            : st.startsWith('Возврат -')
            ? 'text-yellow-600'
            : 'text-red-600';

    function handleFileChange(e) {
        setAttachedFile(e.target.files[0]);
    }

    /* ---------------- refund flow ---------------- */
    function handleOpenRefund(txn) {
        const canRefund =
            permissions.refund && !disabledTxnStatuses.includes(txn.status);
        if (!canRefund) return alert('Возврат недоступен');
        setRefundTxn({ ...txn, client: selectedClient });
        setRefundAmount(txn.price);
        setRefundReason('');
        setBankDetails({ account: '', fullName: '', iin: '', bank: '' });
        setClientBankDetails({ account: '', fullName: '', iin: '', bank: '' });
        setMerchChecklist([false, false, false, false]);
        setSupplementsChecklist([false, false, false, false, false]);
        setAttachedFile(null);
        setProductPhoto(null);
        setShowRefundModal(true);
    }

    function handleSubmitRefund() {
        const now = new Date().toISOString().slice(0, 16).replace('T', ' ');
        const refundId = `REFUND-${refundTxn.id}`;

        const orderStatuses = [
            'Ожидаем курьеру',
            'Передали курьеру',
            'Заказ получен',
            'Отклонен',
        ];
        const allowedStatus =
            orderStatuses.find((st) => permissions.orders.statusEdit[st]) ||
            'Ожидаем курьеру';

        if (
            (refundTxn.type === 'Merch' || refundTxn.type === 'supplements') &&
            returnToMainWarehouse
        ) {
            const orderId = `ORDER-RET-${refundTxn.id}`;
            setOrders((prev) => [
                ...prev,
                {
                    id: orderId,
                    orderNumber: '',
                    date: now,
                    items: refundTxn.name,
                    club: refundTxn.club,
                    client: refundTxn.client,
                    status: allowedStatus,
                    type: 'Возврат',
                    invoiceNumber: '',
                },
            ]);
        }

        const newRefund = {
            ...refundTxn,
            id: refundId,
            status:
                refundTxn.source === 'POS' ||
                (!returnToMainWarehouse &&
                    (refundTxn.type === 'Merch' ||
                        refundTxn.type === 'supplements'))
                    ? 'Возврат оформлен'
                    : 'Возврат - На рассмотрении',
            refundDate: now,
            refundAmount,
            reason: refundReason,
            initiatedBy: currentUser,
            refundMethod,
            bankDetails:
                refundMethod === 'bank_kaspi' ? bankDetails : undefined,
            clientBankDetails:
                refundMethod === 'bank_paybox' ? clientBankDetails : undefined,
            client: refundTxn.client,
            attachedFile: attachedFile ? attachedFile.name : null,
            productPhoto: productPhoto ? productPhoto.name : null,
            merchChecklist: refundTxn.type === 'Merch' ? merchChecklist : null,
            supplementsChecklist:
                refundTxn.type === 'supplements' ? supplementsChecklist : null,
            returnToMainWarehouse,
        };
        setRefunds((r) => [...r, newRefund]);

        const refundRecord = {
            id: refundId,
            providerId: refundTxn.providerId,
            source: refundTxn.source,
            provider: refundTxn.provider,
            date: now,
            name: refundTxn.name,
            type: 'Возврат',
            price: refundAmount,
            charged: refundAmount,
            club: refundTxn.club,
            status: newRefund.status,
            method: refundTxn.method,
            card: refundTxn.card,
            reason: refundReason,
            bankDetails: newRefund.bankDetails,
            clientBankDetails: newRefund.clientBankDetails,
            attachedFile: newRefund.attachedFile,
            merchChecklist: newRefund.merchChecklist,
            supplementsChecklist: newRefund.supplementsChecklist,
        };
        updateClientTransactions(selectedClient.id, (tx) => [
            ...tx,
            refundRecord,
        ]);
        setSelectedClient((c) => ({
            ...c,
            transactions: [...c.transactions, refundRecord],
        }));
        setShowRefundModal(false);
    }

    /* -------- status change -------- */
    function handleRefundStatusChange(id, newStatus) {
        if (!permissions.statusEdit[newStatus]) return alert('Нет доступа');
        setRefunds((r) =>
            r.map((ref) =>
                ref.id === id ? { ...ref, status: newStatus } : ref
            )
        );
        setClients((prev) =>
            prev.map((cl) =>
                cl.transactions.some((t) => t.id === id)
                    ? {
                          ...cl,
                          transactions: cl.transactions.map((t) =>
                              t.id === id ? { ...t, status: newStatus } : t
                          ),
                      }
                    : cl
            )
        );
        if (selectedClient)
            setSelectedClient((p) => ({
                ...p,
                transactions: p.transactions.map((t) =>
                    t.id === id ? { ...t, status: newStatus } : t
                ),
            }));
    }

    function handleOrderStatusChange(orderId, nextStatus) {
        if (nextStatus === 'Передали курьеру') {
            setOrderModal({ open: true, orderId, invoice: '' });
        } else {
            setOrders((prev) =>
                prev.map((o) =>
                    o.id === orderId ? { ...o, status: nextStatus } : o
                )
            );
        }
    }

    function handleOrderModalConfirm(isCorrect) {
        if (isCorrect) {
            setOrders((prev) =>
                prev.map((o) =>
                    o.id === orderModal.orderId
                        ? {
                              ...o,
                              status: 'Передали курьеру',
                              invoiceNumber: orderModal.invoice,
                          }
                        : o
                )
            );
            setOrderModal({ open: false, orderId: null, invoice: '' });
        } else {
            setOrderModal({ open: false, orderId: null, invoice: '' });
        }
    }

    /* ------------- render ------------- */
    const filteredRefunds = refunds.filter(
        (r) =>
            (!filterStatus || r.status === filterStatus) &&
            permissions.statusView[r.status]
    );

    // Функция для сохранения номера заказа
    function handleSaveOrderNumber(refundId) {
        setOrders((prev) =>
            prev.map((o) =>
                o.id === refundId.replace('REFUND', 'ORDER-RET')
                    ? { ...o, orderNumber: editOrderNumber.value }
                    : o
            )
        );
        setEditOrderNumber({ id: null, value: '' });
    }

    return (
        <div className="flex h-screen">
            <Sidebar onNavigate={setActivePage} activePage={activePage} />
            <div className="flex-1 min-w-0 p-2 sm:p-4 md:p-6 overflow-auto bg-gray-50">
                {/* === Клиенты === */}
                {activePage === 'clients' && !selectedClient && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Клиенты</h2>
                        <input
                            className="mb-6 w-full max-w-md p-2 border rounded focus:ring-2 focus:ring-blue-200 transition"
                            placeholder="Поиск клиентов"
                        />
                        <div className="flex flex-col gap-3">
                            {clients.map((cli) => (
                                <div
                                    key={cli.id}
                                    className="bg-white p-4 rounded shadow hover:bg-blue-50 cursor-pointer"
                                    onClick={() => setSelectedClient(cli)}
                                >
                                    <h3 className="font-semibold">
                                        {cli.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {cli.phone}
                                    </p>
                                    <p
                                        className={`text-sm font-medium ${
                                            cli.status === 'Активный'
                                                ? 'text-green-600'
                                                : 'text-red-600'
                                        }`}
                                    >
                                        {cli.status}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* === История клиента === */}
                {activePage === 'clients' && selectedClient && (
                    <>
                        <button
                            onClick={() => setSelectedClient(null)}
                            className="mb-4 text-blue-500 hover:underline"
                        >
                            ← Назад
                        </button>
                        <h2 className="text-2xl font-bold mb-2">
                            {selectedClient.name}
                        </h2>
                        <h3 className="text-lg font-semibold mb-2">
                            История платежей
                        </h3>
                        <div className="overflow-x-auto rounded shadow bg-white">
                            <table className="min-w-full border text-xs sm:text-sm whitespace-nowrap">
                                <thead className="bg-gray-200">
                                    <tr>
                                        {[
                                            'ID',
                                            'Prov ID',
                                            'Источник',
                                            'Provider',
                                            'Дата',
                                            'Название',
                                            'Тип',
                                            'Стоимость',
                                            'Клуб',
                                            'Статус',
                                            'Метод',
                                            'Карта',
                                            'Действия',
                                        ].map((h) => (
                                            <th
                                                key={h}
                                                className="px-3 py-2 text-left"
                                            >
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedClient.transactions.map((t) => {
                                        const canRefund =
                                            permissions.refund &&
                                            !disabledTxnStatuses.includes(
                                                t.status
                                            ) &&
                                            t.type !== 'Возврат';
                                        return (
                                            <tr key={t.id} className="border-t">
                                                <td className="px-3 py-2">
                                                    {t.id}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.providerId}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.source}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.provider}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.date}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.type}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.price}₸
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.club}
                                                </td>
                                                <td
                                                    className={`px-3 py-2 ${statusColor(
                                                        t.status
                                                    )}`}
                                                >
                                                    {t.status}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.method}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {t.card || '-'}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <div className="flex gap-2">
                                                        <button
                                                            disabled
                                                            className="text-gray-400"
                                                        >
                                                            <FaEdit />
                                                        </button>
                                                        <button
                                                            disabled
                                                            className="text-gray-400"
                                                        >
                                                            <FaTrash />
                                                        </button>
                                                        {canRefund && (
                                                            <button
                                                                onClick={() =>
                                                                    handleOpenRefund(
                                                                        t
                                                                    )
                                                                }
                                                                className="text-blue-500 hover:text-blue-700"
                                                            >
                                                                <FaUndo />
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                {/* === Возвраты === */}
                {activePage === 'refunds' && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Возвраты</h2>
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="border rounded p-2 focus:ring-2 focus:ring-blue-200 transition"
                        >
                            <option value="">Все статусы</option>
                            {refundStatuses.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                        {filteredRefunds.length === 0 ? (
                            <p className="text-gray-500">Нет записей.</p>
                        ) : (
                            <div className="overflow-x-auto rounded shadow bg-white">
                                <table className="min-w-full border text-xs sm:text-sm whitespace-nowrap">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            {[
                                                'ID',
                                                'Prov ID',
                                                'Источник',
                                                'Provider',
                                                'Дата',
                                                'Название',
                                                'Клуб',
                                                'Метод',
                                                'Дата возврата',
                                                'Сумма',
                                                'Номер счёта',
                                                'ФИО',
                                                'ИИН',
                                                'Банк',
                                                'Сотрудник',
                                                'Статус',
                                                'Клиент',
                                                'Телефон',
                                                'Причина',
                                                'Файл',
                                                'Чеклист',
                                            ].map((h) => (
                                                <th
                                                    key={h}
                                                    className="px-3 py-2 text-left"
                                                >
                                                    {h}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredRefunds.map((r) => (
                                            <tr key={r.id} className="border-t">
                                                <td className="px-3 py-2">
                                                    {r.id}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.providerId}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.source}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.provider}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.date}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.club}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.method}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.refundDate}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.refundAmount}₸
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.bankDetails?.account ||
                                                        r.clientBankDetails
                                                            ?.account ||
                                                        '-'}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.bankDetails?.fullName ||
                                                        r.clientBankDetails
                                                            ?.fullName ||
                                                        '-'}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.bankDetails?.iin ||
                                                        r.clientBankDetails
                                                            ?.iin ||
                                                        '-'}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.bankDetails?.bank ||
                                                        r.clientBankDetails
                                                            ?.bank ||
                                                        '-'}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.initiatedBy}
                                                </td>
                                                <td
                                                    className={`px-3 py-2 ${statusColor(
                                                        r.status
                                                    )}`}
                                                >
                                                    {permissions.statusEdit[
                                                        r.status
                                                    ] ? (
                                                        <select
                                                            value={r.status}
                                                            onChange={(e) =>
                                                                handleRefundStatusChange(
                                                                    r.id,
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className="border rounded p-1"
                                                        >
                                                            {refundStatuses.map(
                                                                (s) => (
                                                                    <option
                                                                        key={s}
                                                                        value={
                                                                            s
                                                                        }
                                                                        disabled={
                                                                            !permissions
                                                                                .statusEdit[
                                                                                s
                                                                            ]
                                                                        }
                                                                    >
                                                                        {s}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    ) : (
                                                        r.status
                                                    )}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.client?.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.client?.phone}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.reason || '-'}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.attachedFile || '-'}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.productPhoto || '-'}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {r.merchChecklist ? (
                                                        <div className="text-xs">
                                                            {r.merchChecklist.map(
                                                                (
                                                                    checked,
                                                                    idx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className={
                                                                            checked
                                                                                ? 'text-green-600'
                                                                                : 'text-red-600'
                                                                        }
                                                                    >
                                                                        {
                                                                            [
                                                                                'Бирки и ярлыки на месте',
                                                                                'Нет следов носки/использования',
                                                                                'Сохранена оригинальная упаковка',
                                                                                'Есть чек/документ',
                                                                            ][
                                                                                idx
                                                                            ]
                                                                        }
                                                                        :{' '}
                                                                        {checked
                                                                            ? '✓'
                                                                            : '✗'}
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    ) : r.supplementsChecklist ? (
                                                        <div className="text-xs">
                                                            {r.supplementsChecklist.map(
                                                                (
                                                                    checked,
                                                                    idx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className={
                                                                            checked
                                                                                ? 'text-green-600'
                                                                                : 'text-red-600'
                                                                        }
                                                                    >
                                                                        {
                                                                            [
                                                                                'Упаковка не вскрыта, пломбы целы',
                                                                                'Срок годности не истёк',
                                                                                'Есть чек/документ',
                                                                                'Товар не был в употреблении',
                                                                                'Сохранена оригинальная упаковка',
                                                                            ][
                                                                                idx
                                                                            ]
                                                                        }
                                                                        :{' '}
                                                                        {checked
                                                                            ? '✓'
                                                                            : '✗'}
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    ) : (
                                                        '-'
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}

                {/* === Доступы === */}
                {activePage === 'access' && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Доступы</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="font-medium">Право на возврат:</p>
                                <label className="mr-4">
                                    <input
                                        type="radio"
                                        checked={permissions.refund}
                                        onChange={() =>
                                            setPermissions({
                                                ...permissions,
                                                refund: true,
                                            })
                                        }
                                    />
                                    <span className="ml-2">Разрешён</span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        checked={!permissions.refund}
                                        onChange={() =>
                                            setPermissions({
                                                ...permissions,
                                                refund: false,
                                            })
                                        }
                                    />
                                    <span className="ml-2">Запрещён</span>
                                </label>
                            </div>
                            <div>
                                <p className="font-medium">
                                    Повышенный доступ (PayBox):
                                </p>
                                <label className="mr-4">
                                    <input
                                        type="radio"
                                        checked={permissions.extendedAccess}
                                        onChange={() =>
                                            setPermissions({
                                                ...permissions,
                                                extendedAccess: true,
                                            })
                                        }
                                    />
                                    <span className="ml-2">Разрешён</span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        checked={!permissions.extendedAccess}
                                        onChange={() =>
                                            setPermissions({
                                                ...permissions,
                                                extendedAccess: false,
                                            })
                                        }
                                    />
                                    <span className="ml-2">Запрещён</span>
                                </label>
                            </div>
                            <div>
                                <p className="font-medium mb-2">
                                    Права на статусы:
                                </p>
                                {refundStatuses.map((s) => (
                                    <div
                                        key={s}
                                        className="flex items-center mb-1"
                                    >
                                        <span className="w-60 text-sm">
                                            {s}
                                        </span>
                                        <div className="flex gap-4">
                                            <div>
                                                <label className="mr-3 text-sm">
                                                    <input
                                                        type="radio"
                                                        checked={
                                                            permissions
                                                                .statusEdit[s]
                                                        }
                                                        onChange={() =>
                                                            setPermissions({
                                                                ...permissions,
                                                                statusEdit: {
                                                                    ...permissions.statusEdit,
                                                                    [s]: true,
                                                                },
                                                            })
                                                        }
                                                    />
                                                    <span className="ml-1">
                                                        Редактирование
                                                    </span>
                                                </label>
                                                <label className="text-sm">
                                                    <input
                                                        type="radio"
                                                        checked={
                                                            !permissions
                                                                .statusEdit[s]
                                                        }
                                                        onChange={() =>
                                                            setPermissions({
                                                                ...permissions,
                                                                statusEdit: {
                                                                    ...permissions.statusEdit,
                                                                    [s]: false,
                                                                },
                                                            })
                                                        }
                                                    />
                                                    <span className="ml-1">
                                                        Запрещено
                                                    </span>
                                                </label>
                                            </div>
                                            <div>
                                                <label className="mr-3 text-sm">
                                                    <input
                                                        type="radio"
                                                        checked={
                                                            permissions
                                                                .statusView[s]
                                                        }
                                                        onChange={() =>
                                                            setPermissions({
                                                                ...permissions,
                                                                statusView: {
                                                                    ...permissions.statusView,
                                                                    [s]: true,
                                                                },
                                                            })
                                                        }
                                                    />
                                                    <span className="ml-1">
                                                        Просмотр
                                                    </span>
                                                </label>
                                                <label className="text-sm">
                                                    <input
                                                        type="radio"
                                                        checked={
                                                            !permissions
                                                                .statusView[s]
                                                        }
                                                        onChange={() =>
                                                            setPermissions({
                                                                ...permissions,
                                                                statusView: {
                                                                    ...permissions.statusView,
                                                                    [s]: false,
                                                                },
                                                            })
                                                        }
                                                    />
                                                    <span className="ml-1">
                                                        Запрещено
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="font-medium mb-2">
                                    Доступ к заказам:
                                </p>
                                <label className="mr-4">
                                    <input
                                        type="radio"
                                        checked={permissions.orders.view}
                                        onChange={() =>
                                            setPermissions({
                                                ...permissions,
                                                orders: {
                                                    ...permissions.orders,
                                                    view: true,
                                                },
                                            })
                                        }
                                    />
                                    <span className="ml-2">Разрешён</span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        checked={!permissions.orders.view}
                                        onChange={() =>
                                            setPermissions({
                                                ...permissions,
                                                orders: {
                                                    ...permissions.orders,
                                                    view: false,
                                                },
                                            })
                                        }
                                    />
                                    <span className="ml-2">Запрещён</span>
                                </label>
                            </div>
                            <div>
                                <p className="font-medium mb-2">
                                    Права на статусы заказов (возврат):
                                </p>
                                {[
                                    'Ожидаем курьеру',
                                    'Передали курьеру',
                                    'Заказ получен',
                                    'Отклонен',
                                ].map((s) => (
                                    <div
                                        key={s}
                                        className="flex items-center mb-1"
                                    >
                                        <span className="w-60 text-sm">
                                            {s}
                                        </span>
                                        <label className="mr-3 text-sm">
                                            <input
                                                type="radio"
                                                checked={
                                                    permissions.orders
                                                        .statusEdit[s]
                                                }
                                                onChange={() =>
                                                    setPermissions({
                                                        ...permissions,
                                                        orders: {
                                                            ...permissions.orders,
                                                            statusEdit: {
                                                                ...permissions
                                                                    .orders
                                                                    .statusEdit,
                                                                [s]: true,
                                                            },
                                                        },
                                                    })
                                                }
                                            />
                                            <span className="ml-1">
                                                Разрешено
                                            </span>
                                        </label>
                                        <label className="text-sm">
                                            <input
                                                type="radio"
                                                checked={
                                                    !permissions.orders
                                                        .statusEdit[s]
                                                }
                                                onChange={() =>
                                                    setPermissions({
                                                        ...permissions,
                                                        orders: {
                                                            ...permissions.orders,
                                                            statusEdit: {
                                                                ...permissions
                                                                    .orders
                                                                    .statusEdit,
                                                                [s]: false,
                                                            },
                                                        },
                                                    })
                                                }
                                            />
                                            <span className="ml-1">
                                                Запрещено
                                            </span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* === Заказы === */}
                {activePage === 'orders' && permissions.orders.view && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Заказы</h2>
                        <div className="overflow-x-auto rounded shadow bg-white">
                            <table className="min-w-full border text-xs sm:text-sm whitespace-nowrap">
                                <thead className="bg-gray-200">
                                    <tr>
                                        {[
                                            'Номер заказа',
                                            'Дата',
                                            'Товары',
                                            'Клуб',
                                            'Клиент',
                                            'Статус',
                                            'Тип',
                                        ].map((h) => (
                                            <th
                                                key={h}
                                                className="px-3 py-2 text-left"
                                            >
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={8}
                                                className="text-center py-4 text-gray-400"
                                            >
                                                Нет заказов
                                            </td>
                                        </tr>
                                    ) : (
                                        orders.map((order) => (
                                            <tr
                                                key={order.id}
                                                className="border-t"
                                            >
                                                <td className="px-3 py-2">
                                                    {editOrderNumber.id ===
                                                    order.id ? (
                                                        <div className="flex gap-2 items-center">
                                                            <input
                                                                type="text"
                                                                value={
                                                                    editOrderNumber.value
                                                                }
                                                                onChange={(e) =>
                                                                    setEditOrderNumber(
                                                                        {
                                                                            id: order.id,
                                                                            value: e
                                                                                .target
                                                                                .value,
                                                                        }
                                                                    )
                                                                }
                                                                className="border rounded p-1 text-xs"
                                                            />
                                                            <button
                                                                onClick={() =>
                                                                    handleSaveOrderNumber(
                                                                        order.id
                                                                    )
                                                                }
                                                                className="text-green-600 text-xs"
                                                            >
                                                                Сохранить
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    setEditOrderNumber(
                                                                        {
                                                                            id: null,
                                                                            value: '',
                                                                        }
                                                                    )
                                                                }
                                                                className="text-gray-400 text-xs"
                                                            >
                                                                Отмена
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="flex gap-2 items-center">
                                                            <span>
                                                                {order.orderNumber ||
                                                                    '-'}
                                                            </span>
                                                            <button
                                                                onClick={() =>
                                                                    setEditOrderNumber(
                                                                        {
                                                                            id: order.id,
                                                                            value:
                                                                                order.orderNumber ||
                                                                                '',
                                                                        }
                                                                    )
                                                                }
                                                                className="text-blue-500 text-xs"
                                                            >
                                                                <FaEdit />
                                                            </button>
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {order.date}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {order.items}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {order.club}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {order.client?.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {order.type === 'Возврат'
                                                        ? (() => {
                                                              // Найти возврат по id
                                                              const refund =
                                                                  refunds.find(
                                                                      (r) =>
                                                                          r.id ===
                                                                          order.id.replace(
                                                                              'ORDER-RET',
                                                                              'REFUND'
                                                                          )
                                                                  );
                                                              if (!refund)
                                                                  return '—';
                                                              if (
                                                                  refund.status ===
                                                                  'Отклонен'
                                                              ) {
                                                                  return (
                                                                      <span className="text-red-600">
                                                                          Возврат
                                                                          не
                                                                          одобрен
                                                                      </span>
                                                                  );
                                                              }
                                                              if (
                                                                  refund.status !==
                                                                  'Одобрен к возврату'
                                                              ) {
                                                                  return (
                                                                      <span className="text-yellow-600">
                                                                          Ожидание
                                                                          одобрения
                                                                      </span>
                                                                  );
                                                              }
                                                              // Только если возврат одобрен — select
                                                              return (
                                                                  <div className="flex flex-col">
                                                                      <select
                                                                          value={
                                                                              order.status
                                                                          }
                                                                          onChange={(
                                                                              e
                                                                          ) => {
                                                                              if (
                                                                                  !permissions
                                                                                      .orders
                                                                                      .statusEdit[
                                                                                      e
                                                                                          .target
                                                                                          .value
                                                                                  ]
                                                                              )
                                                                                  return;
                                                                              if (
                                                                                  e
                                                                                      .target
                                                                                      .value ===
                                                                                  'Передали курьеру'
                                                                              ) {
                                                                                  setOrderModal(
                                                                                      {
                                                                                          open: true,
                                                                                          orderId:
                                                                                              order.id,
                                                                                          invoice:
                                                                                              '',
                                                                                      }
                                                                                  );
                                                                              } else {
                                                                                  setOrders(
                                                                                      (
                                                                                          prev
                                                                                      ) =>
                                                                                          prev.map(
                                                                                              (
                                                                                                  o
                                                                                              ) =>
                                                                                                  o.id ===
                                                                                                  order.id
                                                                                                      ? {
                                                                                                            ...o,
                                                                                                            status: e
                                                                                                                .target
                                                                                                                .value,
                                                                                                        }
                                                                                                      : o
                                                                                          )
                                                                                  );
                                                                              }
                                                                          }}
                                                                          className="border rounded p-1"
                                                                      >
                                                                          {[
                                                                              'Ожидаем курьеру',
                                                                              'Передали курьеру',
                                                                              'Заказ получен',
                                                                              'Отклонен',
                                                                          ].map(
                                                                              (
                                                                                  st
                                                                              ) => (
                                                                                  <option
                                                                                      key={
                                                                                          st
                                                                                      }
                                                                                      value={
                                                                                          st
                                                                                      }
                                                                                      disabled={
                                                                                          !permissions
                                                                                              .orders
                                                                                              .statusEdit[
                                                                                              st
                                                                                          ]
                                                                                      }
                                                                                  >
                                                                                      {
                                                                                          st
                                                                                      }
                                                                                  </option>
                                                                              )
                                                                          )}
                                                                      </select>
                                                                  </div>
                                                              );
                                                          })()
                                                        : order.status}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {order.type}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* Модалка для статуса 'Передали курьеру' */}
                        {orderModal.open && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                                <div className="bg-white rounded shadow-md w-full max-w-sm p-6">
                                    <h3 className="text-lg font-bold mb-4">
                                        Спросите у курьера номер заказа
                                    </h3>
                                    <div className="mb-4 text-lg font-mono text-center">
                                        {orders.find(
                                            (o) => o.id === orderModal.orderId
                                        )?.orderNumber || '—'}
                                    </div>
                                    <div className="flex gap-2 justify-end">
                                        <button
                                            onClick={() =>
                                                handleOrderModalConfirm(true)
                                            }
                                            className="px-4 py-2 bg-blue-500 text-white rounded"
                                        >
                                            Номер верный
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleOrderModalConfirm(false)
                                            }
                                            className="px-4 py-2 bg-gray-300 rounded"
                                        >
                                            Номер неверный
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* === Модалка возврата === */}
            {showRefundModal && refundTxn && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] flex flex-col overflow-hidden border border-blue-100 animate-fade-in">
                        <div className="px-6 pt-6 pb-2 border-b bg-gradient-to-r from-blue-50 to-white">
                            <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                                <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-2 mr-2">
                                    <FaUndo />
                                </span>
                                Оформление возврата
                            </h3>
                            <div className="text-xs text-gray-400 mt-1">
                                Проверьте все данные перед отправкой
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Секция: Информация о товаре */}
                                <div className="space-y-2 sm:col-span-2">
                                    <div className="flex items-center gap-2 text-blue-700 font-semibold mb-1">
                                        <FaBoxOpen /> Информация о товаре
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-sm bg-blue-50 rounded p-3">
                                        <div>
                                            <b>ID:</b> {refundTxn.id}
                                        </div>
                                        <div>
                                            <b>Prov ID:</b>{' '}
                                            {refundTxn.providerId}
                                        </div>
                                        <div>
                                            <b>Источник:</b> {refundTxn.source}
                                        </div>
                                        <div>
                                            <b>Provider:</b>{' '}
                                            {refundTxn.provider}
                                        </div>
                                        <div>
                                            <b>Дата:</b> {refundTxn.date}
                                        </div>
                                        <div>
                                            <b>Название:</b> {refundTxn.name}
                                        </div>
                                        <div>
                                            <b>Клуб:</b> {refundTxn.club}
                                        </div>
                                        <div>
                                            <b>Метод:</b> {refundTxn.method}
                                        </div>
                                        {refundTxn.card && (
                                            <div>
                                                <b>Карта:</b> {refundTxn.card}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* Секция: Сумма и причина */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-semibold text-blue-700 mb-1 flex items-center gap-2">
                                        <FaMoneyBillWave /> Сумма к возврату
                                    </label>
                                    <input
                                        type="number"
                                        value={refundAmount}
                                        onChange={(e) =>
                                            setRefundAmount(e.target.value)
                                        }
                                        className="block w-full border rounded p-2 focus:ring-2 focus:ring-blue-200 transition"
                                    />
                                    <label className="block text-sm font-semibold text-blue-700 mb-1 flex items-center gap-2 mt-4">
                                        <FaRegFileAlt /> Причина возврата
                                    </label>
                                    <input
                                        type="text"
                                        value={refundReason}
                                        onChange={(e) =>
                                            setRefundReason(e.target.value)
                                        }
                                        placeholder="Например: двойная оплата"
                                        className="block w-full border rounded p-2 focus:ring-2 focus:ring-blue-200 transition"
                                    />
                                </div>
                                {/* Секция: Способ возврата */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-semibold text-blue-700 mb-1 flex items-center gap-2">
                                        <FaMoneyBillWave /> Способ возврата
                                    </label>
                                    <select
                                        value={refundMethod}
                                        onChange={(e) =>
                                            setRefundMethod(e.target.value)
                                        }
                                        className="block w-full border rounded p-2 focus:ring-2 focus:ring-blue-200 transition"
                                    >
                                        <option value="cash">Наличными</option>
                                        <option value="card">Картой</option>
                                        <option value="bank_kaspi">
                                            Банковский перевод (Kaspi)
                                        </option>
                                        <option value="bank_paybox">
                                            Банковский перевод (PayBox)
                                        </option>
                                    </select>
                                </div>
                                {/* Секция: Чек-листы */}
                                <div className="space-y-2 sm:col-span-2">
                                    {refundTxn.source === 'Mobile' &&
                                        refundTxn.type === 'Merch' && (
                                            <fieldset className="p-3 border rounded bg-blue-50">
                                                <legend className="text-sm font-bold mb-2 flex items-center gap-2 text-blue-700">
                                                    <FaCheckCircle /> Чеклист
                                                    для возврата одежды
                                                </legend>
                                                {[
                                                    'Бирки и ярлыки на месте',
                                                    'Нет следов носки/использования',
                                                    'Сохранена оригинальная упаковка',
                                                    'Есть чек/документ, подтверждающий покупку',
                                                ].map((item, idx) => (
                                                    <label
                                                        key={idx}
                                                        className="block"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                merchChecklist[
                                                                    idx
                                                                ] || false
                                                            }
                                                            onChange={() => {
                                                                const updated =
                                                                    [
                                                                        ...merchChecklist,
                                                                    ];
                                                                updated[idx] =
                                                                    !updated[
                                                                        idx
                                                                    ];
                                                                setMerchChecklist(
                                                                    updated
                                                                );
                                                            }}
                                                            className="accent-blue-500 mr-2"
                                                        />
                                                        {item}
                                                    </label>
                                                ))}
                                            </fieldset>
                                        )}
                                    {refundTxn.type === 'supplements' && (
                                        <fieldset className="p-3 border rounded bg-blue-50">
                                            <legend className="text-sm font-bold mb-2 flex items-center gap-2 text-blue-700">
                                                <FaCheckCircle /> Чеклист для
                                                возврата БАДов
                                            </legend>
                                            {[
                                                'Упаковка не вскрыта, пломбы целы',
                                                'Срок годности не истёк',
                                                'Есть чек/документ, подтверждающий покупку',
                                                'Товар не был в употреблении',
                                                'Сохранена оригинальная упаковка',
                                            ].map((item, idx) => (
                                                <label
                                                    key={idx}
                                                    className="block"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            supplementsChecklist[
                                                                idx
                                                            ] || false
                                                        }
                                                        onChange={() => {
                                                            const updated = [
                                                                ...supplementsChecklist,
                                                            ];
                                                            updated[idx] =
                                                                !updated[idx];
                                                            setSupplementsChecklist(
                                                                updated
                                                            );
                                                        }}
                                                        className="accent-blue-500 mr-2"
                                                    />
                                                    {item}
                                                </label>
                                            ))}
                                        </fieldset>
                                    )}
                                    {(refundTxn.name.includes('Носки') ||
                                        refundTxn.name.includes('Бутылка')) && (
                                        <div className="p-2 bg-yellow-100 border border-yellow-400 rounded text-yellow-800 mt-2">
                                            Такой товар в целом нельзя возврат
                                            оформлять, но оформление возможно.
                                        </div>
                                    )}
                                </div>
                                {/* Секция: Фото товара для Merch и supplements */}
                                {(refundTxn.type === 'Merch' ||
                                    refundTxn.type === 'supplements') && (
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-blue-700 mb-1 flex items-center gap-2">
                                            <FaRegImage /> Фото товара
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                setProductPhoto(
                                                    e.target.files[0]
                                                )
                                            }
                                            className="block w-full border rounded p-2 focus:ring-2 focus:ring-blue-200 transition"
                                        />
                                        {productPhoto && (
                                            <div className="text-xs text-gray-600">
                                                Фото товара: {productPhoto.name}
                                            </div>
                                        )}
                                    </div>
                                )}
                                {/* Секция: Вложения */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-blue-700 mb-1 flex items-center gap-2">
                                        <FaRegFileAlt /> Прикрепить документ
                                    </label>
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="block w-full border rounded p-2 focus:ring-2 focus:ring-blue-200 transition"
                                    />
                                    {attachedFile && (
                                        <div className="text-xs text-gray-600">
                                            Файл: {attachedFile.name}
                                        </div>
                                    )}
                                    <a
                                        href="/shablon.docx"
                                        download
                                        className="text-blue-500 underline text-xs mt-1 inline-block"
                                    >
                                        Скачать шаблон для возврата
                                    </a>
                                </div>
                                {/* Секция: Реквизиты */}
                                {refundMethod === 'bank_kaspi' && (
                                    <div className="grid grid-cols-2 gap-2 bg-blue-50 p-3 rounded">
                                        {[
                                            'Номер счёта',
                                            'ФИО',
                                            'ИИН',
                                            'Банк',
                                        ].map((lbl, idx) => (
                                            <label
                                                key={lbl}
                                                className="block text-sm"
                                            >
                                                {lbl}
                                                <input
                                                    className="mt-1 block w-full border rounded p-2 focus:ring-2 focus:ring-blue-200 transition"
                                                    onChange={(e) =>
                                                        setBankDetails({
                                                            ...bankDetails,
                                                            ['account fullName iin bank'.split(
                                                                ' '
                                                            )[idx]]:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </label>
                                        ))}
                                    </div>
                                )}
                                {refundMethod === 'bank_paybox' && (
                                    <fieldset className="p-3 border rounded bg-blue-50">
                                        <legend className="text-sm font-bold mb-2 flex items-center gap-2 text-blue-700">
                                            <FaRegFileAlt /> Реквизиты клиента
                                            (опционально)
                                        </legend>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                'Номер счёта',
                                                'ФИО',
                                                'ИИН',
                                                'Банк',
                                            ].map((lbl, idx) => (
                                                <label
                                                    key={lbl}
                                                    className="block text-sm"
                                                >
                                                    {lbl}
                                                    <input
                                                        disabled={
                                                            !permissions.extendedAccess
                                                        }
                                                        className={`mt-1 block w-full border rounded p-2 focus:ring-2 focus:ring-blue-200 transition ${
                                                            !permissions.extendedAccess
                                                                ? 'bg-gray-100'
                                                                : ''
                                                        }`}
                                                        onChange={(e) =>
                                                            setClientBankDetails(
                                                                {
                                                                    ...clientBankDetails,
                                                                    ['account fullName iin bank'.split(
                                                                        ' '
                                                                    )[idx]]:
                                                                        e.target
                                                                            .value,
                                                                }
                                                            )
                                                        }
                                                    />
                                                </label>
                                            ))}
                                        </div>
                                    </fieldset>
                                )}
                                {/* Радиокнопки для возврата товара/БАДов */}
                                {(refundTxn.type === 'Merch' ||
                                    refundTxn.type === 'supplements') && (
                                    <div className="mb-2 sm:col-span-2">
                                        <span className="block font-medium mb-1 text-blue-700">
                                            Куда вернуть товар?
                                        </span>
                                        <label className="mr-4">
                                            <input
                                                type="radio"
                                                checked={!returnToMainWarehouse}
                                                onChange={() =>
                                                    setReturnToMainWarehouse(
                                                        false
                                                    )
                                                }
                                                disabled={
                                                    refundTxn.status !==
                                                    'Одобрен к возврату'
                                                }
                                                className="accent-blue-500"
                                            />
                                            <span className="ml-2 text-gray-700">
                                                Вернуть товар на склад клуба
                                                (POS)
                                                {refundTxn.status !==
                                                    'Одобрен к возврату' && (
                                                    <span className="text-xs text-red-500 ml-2">
                                                        Доступно только после
                                                        одобрения
                                                    </span>
                                                )}
                                            </span>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                checked={returnToMainWarehouse}
                                                onChange={() =>
                                                    setReturnToMainWarehouse(
                                                        true
                                                    )
                                                }
                                                className="accent-blue-500"
                                            />
                                            <span className="ml-2">
                                                Оформить возврат в главный склад
                                            </span>
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 p-4 border-t bg-gray-50">
                            <button
                                onClick={() => setShowRefundModal(false)}
                                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
                            >
                                Отмена
                            </button>
                            <button
                                onClick={handleSubmitRefund}
                                className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
