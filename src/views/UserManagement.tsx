import React, { useState } from 'react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import DataTable from '@/components/shared/DataTable'
import { 
    HiPlus
} from 'react-icons/hi'
import SearchIcon from '@/components/ui/SearchIcon'
import DownloadIcon from '@/components/ui/DownloadIcon'
import { EditPencilSvg, EyeActionSvg, DeleteActionSvg } from '@/assets/svg'
import type { ColumnDef } from '@tanstack/react-table'

interface UserData {
    id: string
    userName: string
    email: string
    mobileNo: string
    signUpDate: string
    cancelationDate: string
    plan: string
    status: 'Active' | 'Suspended' | 'Inactive'
}

const UserManagement = () => {
    const [searchTerm, setSearchTerm] = useState('')

    // Mock data for users based on the image
    const userData: UserData[] = [
        {
            id: '1',
            userName: 'Christine Brooks',
            email: 'mail@somemail.com',
            mobileNo: '+1 854 652 4102',
            signUpDate: '11-12-2024',
            cancelationDate: '11-12-2024',
            plan: 'Free',
            status: 'Active'
        },
        {
            id: '2',
            userName: 'Rosie Pearson',
            email: 'mail@somemail.com',
            mobileNo: '+1 854 652 4102',
            signUpDate: '11-12-2024',
            cancelationDate: '11-12-2024',
            plan: 'Premium',
            status: 'Suspended'
        },
        {
            id: '3',
            userName: 'Darrell Caldwell',
            email: 'mail@somemail.com',
            mobileNo: '+1 854 652 4102',
            signUpDate: '11-12-2024',
            cancelationDate: '11-12-2024',
            plan: 'Pro',
            status: 'Inactive'
        },
        {
            id: '4',
            userName: 'Gilbert Johnston',
            email: 'mail@somemail.com',
            mobileNo: '+1 854 652 4102',
            signUpDate: '11-12-2024',
            cancelationDate: '11-12-2024',
            plan: 'Free',
            status: 'Active'
        },
        {
            id: '5',
            userName: 'Alan Cain',
            email: 'mail@somemail.com',
            mobileNo: '+1 854 652 4102',
            signUpDate: '11-12-2024',
            cancelationDate: '11-12-2024',
            plan: 'Premium',
            status: 'Active'
        },
        {
            id: '6',
            userName: 'Alfred Murray',
            email: 'mail@somemail.com',
            mobileNo: '+1 854 652 4102',
            signUpDate: '11-12-2024',
            cancelationDate: '11-12-2024',
            plan: 'Pro',
            status: 'Suspended'
        }
    ]

    const filteredUsers = userData.filter(user =>
        user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Table columns definition
    const columns: ColumnDef<UserData>[] = [
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
            header: 'Email Id',
            accessorKey: 'email',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.email}</span>
            }
        },
        {
            header: 'Mobile No.',
            accessorKey: 'mobileNo',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.mobileNo}</span>
            }
        },
        {
            header: 'Sign Up Date',
            accessorKey: 'signUpDate',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.signUpDate}</span>
            }
        },
        {
            header: 'Cancelation Date',
            accessorKey: 'cancelationDate',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.cancelationDate}</span>
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
                <h1 className="text-[#202224] font-nunito text-[24px] font-bold leading-none tracking-[-0.114px]">User Management</h1>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:items-center">
                    {/* Search Input */}
                    <div className="relative bg-white rounded-[35px] w-full sm:w-auto">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            type="text"
                            placeholder="Search Users"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-full sm:w-[253px] text-[#202224] font-normal text-[14px] leading-none font-nunito rounded-[19px] border border-[#D5D5D5] bg-white"
                        />
                    </div>
                    {/* Button Row: Add User + Download always together */}
                    <div className="flex flex-row gap-2 w-full sm:w-auto justify-end">
                        <Button variant="solid" size="sm" className="flex items-center justify-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF] w-full sm:w-auto">
                            Add User
                        </Button>
                        <Button variant="solid" size="sm" className="flex items-center justify-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF] w-full sm:w-auto">
                            Download
                            <DownloadIcon className="ml-2" size={16} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-6 mb-8">
                {/* Total Users Card */}
                <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-3">
                    <div className="relative">
                        <div className='flex justify-between items-start '>
                            <div className="">
                                <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[16px]">Total Users</h3>
                                <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">40,689</span>
                            </div>
                            <div className=" rounded-lg flex items-center justify-center">
                                <img src="/img/images/totaluser.png" alt="Total Users" className="" />
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Active Users Card */}
                <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-3">
                    <div className="relative">
                        <div className='flex justify-between items-start '>
                            <div className="">
                                <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[16px]">Active Users</h3>
                                <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">10,293</span>
                            </div>
                            <div className=" rounded-lg flex items-center justify-center">
                                <img src="/img/images/activeuser.png" alt="Active Users" className="" />
                            </div>
                        </div>
                    </div>
                </Card>

                {/* User Growth Card */}
                <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-3">
                    <div className=" relative">
                        <div className='flex justify-between items-start '>
                            <div className="">
                                <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[16px]">User Growth</h3>
                                <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">60%</span>
                            </div>
                            <div className=" rounded-lg flex items-center justify-center">
                                <img src="/img/images/growthuser.png" alt="User Growth" className="" />
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Churn Rate Card */}
                <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-3">
                    <div className=" relative">
                        <div className='flex justify-between items-start '>
                            <div className="">
                                <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[16px]">Churn Rate</h3>
                                <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">67%</span>
                            </div>
                            <div className=" rounded-lg flex items-center justify-center">
                                <img src="/img/images/monthlyuser.png" alt="Churn Rate" className="" />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* DataTable */}
            <div className="">
                <DataTable
                    columns={columns}
                    data={filteredUsers}
                    loading={false}
                    pageSizes={[10, 25, 50]}
                    pagingData={{
                        total: filteredUsers.length,
                        pageIndex: 1,
                        pageSize: 10,
                    }}
                />
                </div>
        </div>
    )
}

export default UserManagement 