import React, { useState } from 'react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import DataTable from '@/components/shared/DataTable'
import { 
    HiArrowDown
} from 'react-icons/hi'
import SearchIcon from '@/components/ui/SearchIcon'
import { EditPencilSvg, EyeActionSvg, DeleteActionSvg } from '@/assets/svg'
import type { ColumnDef } from '@tanstack/react-table'
import DownloadIcon from '@/components/ui/DownloadIcon'

interface SubscriptionData {
    id: string
    userName: string
    emailAddress: string
    plan: string
    paymentDate: string
    startDate: string
    successfulPaymentMonth: string
    status: 'Active' | 'Suspended' | 'Inactive'
}

const Subscription = () => {
    const [searchTerm, setSearchTerm] = useState('')

    // Mock data for subscriptions based on the image
    const subscriptionData: SubscriptionData[] = [
        {
            id: '1',
            userName: 'Christine Brooks',
            emailAddress: '089 Kutch Green Apt. 448',
            plan: 'Free',
            paymentDate: '11-12-2024',
            startDate: '11-12-2024',
            successfulPaymentMonth: 'February, 2024',
            status: 'Active'
        },
        {
            id: '2',
            userName: 'Rosie Pearson',
            emailAddress: '979 Immanuel Perry Suite 526',
            plan: 'Premium',
            paymentDate: '11-12-2024',
            startDate: '11-12-2024',
            successfulPaymentMonth: 'February, 2024',
            status: 'Suspended'
        },
        {
            id: '3',
            userName: 'Darrell Caldwell',
            emailAddress: '8587 Frida Ports',
            plan: 'Pro',
            paymentDate: '11-12-2024',
            startDate: '11-12-2024',
            successfulPaymentMonth: 'February, 2024',
            status: 'Inactive'
        },
        {
            id: '4',
            userName: 'Gilbert Johnston',
            emailAddress: '768 Destiny Lake Suite 600',
            plan: 'Free',
            paymentDate: '11-12-2024',
            startDate: '11-12-2024',
            successfulPaymentMonth: 'February, 2024',
            status: 'Active'
        },
        {
            id: '5',
            userName: 'Alan Cain',
            emailAddress: '042 Mylene Throughway',
            plan: 'Free',
            paymentDate: '11-12-2024',
            startDate: '11-12-2024',
            successfulPaymentMonth: 'February, 2024',
            status: 'Suspended'
        },
        {
            id: '6',
            userName: 'Alfred Murray',
            emailAddress: '563 Weimann Mountain',
            plan: 'Premium',
            paymentDate: '11-12-2024',
            startDate: '11-12-2024',
            successfulPaymentMonth: 'February, 2024',
            status: 'Inactive'
        }
    ]

    const filteredSubscriptions = subscriptionData.filter(subscription =>
        subscription.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subscription.emailAddress.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Table columns definition
    const columns: ColumnDef<SubscriptionData>[] = [
        {
            header: "User's Name",
            accessorKey: 'userName',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="flex items-center">
                        <span className="">{row.userName}</span>
                    </div>
                )
            }
        },
        {
            header: 'Email Address',
            accessorKey: 'emailAddress',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.emailAddress}</span>
            }
        },
        {
            header: 'Plan',
            accessorKey: 'plan',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.plan}</span>
            }
        },
        {
            header: 'Payment Date',
            accessorKey: 'paymentDate',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.paymentDate}</span>
            }
        },
        {
            header: 'Start Date',
            accessorKey: 'startDate',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.startDate}</span>
            }
        },
        {
            header: 'Successful Payment Month',
            accessorKey: 'successfulPaymentMonth',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.successfulPaymentMonth}</span>
            }
        },
        {
            header: 'Status',
            accessorKey: 'status',
            enableSorting: true,
            meta: { headerAlign: 'center' },
            cell: (props) => {
                const row = props.row.original
                const getStatusColor = (status: string) => {
                    switch (status) {
                        case 'Active':
                            return 'rounded-[13.5px] bg-[#00C417] text-white text-[14px] font-bold leading-none font-nunito px-[26px] py-[8px] flex justify-center'
                        case 'Suspended':
                            return 'rounded-[13.5px] bg-[#FF7308] text-white text-[14px] font-bold leading-none font-nunito px-[26px] py-[8px] flex justify-center'
                        case 'Inactive':
                            return 'rounded-[13.5px] bg-[#E8E8E8] text-gray-800 text-[14px] font-bold leading-none font-nunito px-[26px] py-[8px] flex justify-center'
                        default:
                            return 'rounded-[13.5px] bg-[#E8E8E8] text-gray-800 text-[14px] font-bold leading-none font-nunito'
                    }
                }
                return (
                    <Badge className={getStatusColor(row.status)}>
                        {row.status}
                    </Badge>
                )
            }
        },
        {
            header: 'Action',
            accessorKey: 'actions',
            meta: { headerAlign: 'center' },
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="flex items-center justify-center">
                        <div className="flex bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                            <button className="p-[9px_8px_9px_12px] hover:bg-white border-r border-gray-200 transition-colors duration-200">
                                <EditPencilSvg />
                            </button>
                            <button className="p-[9px_8px_9px_12px] hover:bg-white border-r border-gray-200 transition-colors duration-200">
                                <EyeActionSvg />
                            </button>
                            <button className="p-[9px_8px_9px_12px] hover:bg-white transition-colors duration-200">
                                <DeleteActionSvg />
                            </button>
                        </div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className="min-h-screen w-full">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
                <h1 className="text-[#202224] font-nunito text-[24px] font-bold leading-none tracking-[-0.114px]">Subscriptions</h1>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:items-center">
                <div className="relative bg-white rounded-[35px] w-full sm:w-auto">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            type="text"
                            placeholder="Search Users"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10  w-full sm:w-[253px] text-[#202224] font-normal text-[14px] leading-none font-nunito rounded-[19px] border border-[#D5D5D5] bg-white"
                        />
                    </div>
                    <div className='flex flex-row gap-2 w-full sm:w-auto justify-end'>

                    <Button variant="solid" size="sm" className="flex items-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF]">
                        Download
                        <DownloadIcon className="ml-2" size={16} />
                    </Button>
                    </div>
                </div>
            </div>

            {/* DataTable */}
            <div className="">
                <DataTable
                    columns={columns}
                    data={filteredSubscriptions}
                    loading={false}
                    pageSizes={[10, 25, 50]}
                    pagingData={{
                        total: filteredSubscriptions.length,
                        pageIndex: 1,
                        pageSize: 10,
                    }}
                />
            </div>
        </div>
    )
}

export default Subscription 