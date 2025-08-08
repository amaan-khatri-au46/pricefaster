import React, { useState } from 'react'
import Card from '@/components/ui/Card'
import Chart from '@/components/shared/Chart'
import DataTable from '@/components/shared/DataTable'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { EditPencilSvg, EyeActionSvg, DeleteActionSvg } from '@/assets/svg'
import type { ColumnDef } from '@tanstack/react-table'

interface UserData {
    id: string
    name: string
    email: string
    plan: string
    status: 'Active' | 'Suspended' | 'Inactive'
}

interface TrackedZoneData {
    id: string
    city: string
    state: string
    zipcode: string
}

const Dashboard = () => {
    const [selectedUsers, setSelectedUsers] = useState<string[]>([])

    // Mock data for the user table
    const userData: UserData[] = [
        {
            id: '1',
            name: 'Cristina Brooks',
            email: 'QBPrice@ Zoom.App.123',
            plan: 'Pro',
            status: 'Active'
        },
        {
            id: '2',
            name: 'Rami Prower',
            email: 'QBPricer@ Fairy.Tale.123',
            plan: 'Freemium',
            status: 'Suspended'
        },
        {
            id: '3',
            name: 'Daniel Caldwell',
            email: 'QBP@ Yaga.App',
            plan: 'Pro',
            status: 'Inactive'
        },
        {
            id: '4',
            name: 'Robert Jackson',
            email: 'QBP@ Yaga.App',
            plan: 'Pro',
            status: 'Active'
        }
    ]

    // Mock data for most tracked areas
    const trackedZoneData: TrackedZoneData[] = [
        {
            id: '1',
            city: '6096 Marjolaine Landing',
            state: '12.09.2019 - 12.53 PM',
            zipcode: '423'
        },
        {
            id: '2',
            city: '6096 Marjolaine Landing',
            state: '12.09.2019 - 12.53 PM',
            zipcode: '423'
        },
        {
            id: '3',
            city: '6096 Marjolaine Landing',
            state: '12.09.2019 - 12.53 PM',
            zipcode: '423'
        },
        {
            id: '4',
            city: '6096 Marjolaine Landing',
            state: '12.09.2019 - 12.53 PM',
            zipcode: '423'
        },
        {
            id: '5',
            city: '6096 Marjolaine Landing',
            state: '12.09.2019 - 12.53 PM',
            zipcode: '423'
        }
    ]

    // Chart data for subscription performance
    const subscriptionPerformanceData = [
        {
            name: 'New Users',
            data: [55, 40, 45, 35]
        },
        {
            name: 'Old Users',
            data: [30, 50, 28, 45]
        }
    ]

    const subscriptionPerformanceCategories = ['Free', 'Pro', 'Premium', 'Business']

    // Donut chart data for subscription distribution
    const subscriptionDistributionData = [90, 35, 25, 20]
    const subscriptionDistributionLabels = ['Free', 'Pro', 'Premium', 'Business']

    // Table columns definition for users
    const userColumns: ColumnDef<UserData>[] = [
        {
            header: "User's Name",
            accessorKey: 'name',
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="flex items-center">
                        <span className="">{row.name}</span>
                    </div>
                )
            }
        },
        {
            header: 'Email Address',
            accessorKey: 'email',
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.email}</span>
            }
        },
        {
            header: 'Plan',
            accessorKey: 'plan',
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.plan}</span>
            }
        },
        {
            header: 'Status',
            accessorKey: 'status',
            meta: { headerAlign: 'center' },
            cell: (props) => {
                const row = props.row.original
                const getStatusColor = (status: string) => {
                    switch (status) {
                        case 'Active':
                            return 'rounded-[13.5px] bg-[#00C417] text-white text-[14px] font-bold leading-none font-nunito px-[10px] py-[8px] flex justify-center'
                        case 'Suspended':
                            return 'rounded-[13.5px] bg-[#FF7308] text-white text-[14px] font-bold leading-none font-nunito px-[10px] py-[8px] flex justify-center'
                        case 'Inactive':
                            return 'rounded-[13.5px] bg-[#E8E8E8] text-gray-800 text-[14px] font-bold leading-none font-nunito px-[10px] py-[8px] flex justify-center'
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

    // Table columns definition for tracked areas
    const trackedZoneColumns: ColumnDef<TrackedZoneData>[] = [
        {
            header: 'City',
            accessorKey: 'city',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="flex items-center">
                        <span className="">{row.city}</span>
                    </div>
                )
            }
        },
        {
            header: 'State',
            accessorKey: 'state',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="flex items-center">
                        <span className="">{row.state}</span>
                    </div>
                )
            }
        },
        {
            header: 'Zipcode',
            accessorKey: 'zipcode',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="flex items-center">
                        <span className="">{row.zipcode}</span>
                    </div>
                )
            }
        }
    ]

    return (
        <div className="min-h-screen">
            {/* Section 1: User Metrics */}
            <div className="mb-8">
                <h2 className="text-[#202224] font-nunito text-[18px] font-bold leading-none tracking-[-0.114px] mb-[20px]">User Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-6">
                    {/* Total Users Card */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-3">
                        <div className="relative">
                            <div className='flex justify-between items-start mb-[29px]'>
                                <div className="">
                                    <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[13px]">Total Users</h3>
                                    <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">40,689</span>
                                </div>
                                <div className=" rounded-lg flex items-center justify-center">
                                    <img src="/img/images/totaluser.png" alt="Total Users" className="" />
                                </div>

                            </div>
                            <div className="flex items-baseline">
                                <div className=" flex items-center">
                                    <img src="/img/images/ic-trending-up-24px.png" alt="Total Users" className="mr-[8px]" />
                                    <span className="text-[#00B69B] font-nunito text-[16px] font-semibold leading-none mr-[4px]">8.5%</span>
                                    <span className="text-[#606060] font-nunito text-[16px] font-semibold leading-none">from yesterday</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Active Users Card */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-3">
                        <div className="relative">
                            <div className='flex justify-between items-start mb-[29px]'>
                                <div className="">
                                    <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[13px]">Active Users</h3>
                                    <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">1029</span>
                                </div>
                                <div className=" rounded-lg flex items-center justify-center">
                                    <img src="/img/images/activeuser.png" alt="Total Users" className="" />
                                </div>
                            </div>
                            <div className="flex items-baseline">
                                <div className=" flex items-center">
                                    <img src="/img/images/ic-trending-up-24px.png" alt="Total Users" className="mr-[8px]" />
                                    <span className="text-[#00B69B] font-nunito text-[16px] font-semibold leading-none mr-[4px]">1.1%</span>
                                    <span className="text-[#606060] font-nunito text-[16px] font-semibold leading-none">from past week</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Monthly New Users Card */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-3">
                        <div className=" relative">
                            <div className='flex justify-between items-start mb-[29px]'>
                                <div className="">
                                    <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[13px]">Monthly New Users</h3>
                                    <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">2040</span>
                                </div>
                                <div className=" rounded-lg flex items-center justify-center">
                                    <img src="/img/images/monthlyuser.png" alt="Total Users" className="" />
                                </div>
                            </div>
                            <div className="flex items-baseline">
                                <div className=" flex items-center">
                                    <img src="/img/images/ic-trending-up-24px.png" alt="Total Users" className="mr-[8px]" />
                                    <span className="text-[#00B69B] font-nunito text-[16px] font-semibold leading-none mr-[4px]">1.8% </span>
                                    <span className="text-[#606060] font-nunito text-[16px] font-semibold leading-none">Up from yesterday</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Update Rate Card */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-3">
                        <div className=" relative">
                            <div className='flex justify-between items-start mb-[29px]'>
                                <div className="">
                                    <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[13px]">Growth Rate</h3>
                                    <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">85%</span>
                                </div>
                                <div className=" rounded-lg flex items-center justify-center">
                                    <img src="/img/images/growthuser.png" alt="Total Users" className="" />
                                </div>
                            </div>

                            <div className="flex items-baseline">
                                <div className=" flex items-center">
                                    <img src="/img/images/ic-trending-down-24px.png" alt="Total Users" className="mr-[8px]" />
                                    <span className="text-[#F93C65] font-nunito text-[16px] font-semibold leading-none mr-[4px]">0.3%</span>
                                    <span className="text-[#606060] font-nunito text-[16px] font-semibold leading-none"> Down from yesterday</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Section 5: Property */}
            <div className="mb-8">
                <h2 className="text-[#202224] font-nunito text-[18px] font-bold leading-none tracking-[-0.114px] mb-[20px]">Property</h2>
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-6">
                    {/* Total Properties Tracked Card */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 md:col-span-3 exact-lg:col-span-4 lg:col-span-2 xl:col-span-3">
                        <div className="">
                            <div className="flex justify-between items-start ">
                                <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[13px]">Total Properties Tracked</h3>
                            </div>
                            <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">800</span>
                        </div>
                    </Card>

                    {/* Active Property Track Card */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 exact-lg:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-3">
                        <div className="">
                            <div className="flex justify-between items-start">
                                <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[13px]">Active Property Track</h3>
                            </div>
                            <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">600</span>
                        </div>
                    </Card>

                    {/* Average Tracked Card */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 exact-lg:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-3">
                        <div className="">
                            <div className="flex justify-between items-start">
                                <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[13px]">Average Tracked</h3>
                            </div>
                            <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">85%</span>
                        </div>
                    </Card>

                    {/* Average Price Drop Card */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)] col-span-1 exact-lg:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-3">
                        <div className="">
                            <div className="flex justify-between items-start">
                                <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70 mb-[13px]">Average Price Drop</h3>
                            </div>
                            <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">85%</span>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Section 2: Most Tracked Areas */}
            <div className="mb-8">
                <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)]">
                    <div className="px-[12px]">
                        <div className="flex justify-between items-center mb-[20px]">
                            <h2 className="text-[#202224] font-nunito text-[20px] font-semibold leading-[20px]">Most Tracked Areas</h2>
                            <div className="flex items-center space-x-2">
                                <select className="border border-[#D5D5D5] opacity-40 bg-[#FCFDFD] rounded-[4px] px-3 py-2 text-sm focus:outline-none text-[#202224] font-nunito text-[18px] font-bold leading-none tracking-[-0.114px]">
                                    <option selected>October</option>
                                    <option>September</option>
                                    <option>August</option>
                                </select>
                            </div>
                        </div>
                        <DataTable
                            columns={trackedZoneColumns}
                            data={trackedZoneData}
                            loading={false}
                            pageSizes={[5, 10, 25]}
                            pagingData={{
                                total: trackedZoneData.length,
                                pageIndex: 1,
                                pageSize: 5,
                            }}
                            containerClassName="bg-white border-0 rounded-t-[12px] overflow-hidden"
                            headerClassName="!bg-[#F3F6FE]"
                            bodyClassName="rounded-none"
                        />
                    </div>
                </Card>
            </div>

            {/* Section 3: Price Alert */}
            <div className="mb-8">
                <h2 className="text-[#202224] font-nunito text-[18px] font-bold leading-none tracking-[-0.114px] mb-[20px]">Price Alert</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Daily Price Alert Card */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-[#202224] font-nunito text-[22px] font-bold leading-normal tracking-[-0.114px] opacity-70">Daily Price Alert</h3>
                            </div>
                            <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">80</span>
                        </div>
                    </Card>

                    {/* Weekly Price Alert Card */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-[#202224] font-nunito text-[22px] font-bold leading-normal tracking-[-0.114px] opacity-70">Weekly Price Alert</h3>
                            </div>
                            <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">560</span>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Section 4: Revenue & Cost Metrics */}
            <div className="mb-8">
                <h2 className="text-[#202224] font-nunito text-[18px] font-bold leading-none tracking-[-0.114px] mb-[20px]">Revenue & Cost Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Monthly Recurring Revenue (MRR) Card */}
                    <div className="md:col-span-6 lg:col-span-6 xl:col-span-4">
                        <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)]">
                            <div className="">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70">Monthly Recurring Revenue (MRR)</h3>
                                </div>
                                <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">800</span>
                            </div>
                        </Card>
                    </div>

                    {/* Refund Payments Issued Card */}
                    <div className="md:col-span-6 lg:col-span-6 xl:col-span-4">
                        <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)]">
                            <div className="">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70">Refund Payments Issued</h3>
                                </div>
                                <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">60/$2500</span>
                            </div>
                        </Card>
                    </div>

                    {/* Conversion Rate Card */}
                    <div className="md:col-span-6 lg:col-span-6 xl:col-span-4">
                        <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)]">
                            <div className="">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-[#202224] font-nunito text-[18px] font-bold leading-normal tracking-[-0.114px] opacity-70">Conversion Rate</h3>
                                </div>
                                <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">85%</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>



            {/* Section 6: Subscription Metrics */}
            <div className="mb-8">
                <h2 className="text-[#202224] font-nunito text-[18px] font-bold leading-none tracking-[-0.114px] mb-[20px]">Subscription Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* Pro Plan */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)]">
                        <div className=" relative">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-[#202224] font-nunito text-[22px] font-bold leading-normal tracking-[-0.114px] opacity-70">Free Plan</h3>

                            </div>
                            <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">800</span>
                        </div>
                    </Card>

                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)]">
                        <div className=" relative">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-[#202224] font-nunito text-[22px] font-bold leading-normal tracking-[-0.114px] opacity-70">Pro Plan</h3>

                            </div>
                            <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">800</span>
                        </div>
                    </Card>

                    {/* Freemium Plan */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)]">
                        <div className="relative">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-[#202224] font-nunito text-[22px] font-bold leading-normal tracking-[-0.114px] opacity-70">Premium Plan</h3>

                            </div>
                            <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">800</span>
                        </div>
                    </Card>

                    {/* Business Plan */}
                    <Card className="bg-white rounded-[14px] shadow-[6px_6px_54px_0_rgba(0,0,0,0.05)]">
                        <div className=" relative">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-[#202224] font-nunito text-[22px] font-bold leading-normal tracking-[-0.114px] opacity-70">Business Plan</h3>
                            </div>
                            <span className="text-[#202224] font-nunito text-[28px] not-italic font-bold leading-none tracking-[1px]">800</span>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Section 7: Subscription Performance Charts */}
            <div className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Bar Chart */}
                    <Card className="bg-white border border-[#B9B9B9] rounded-[14px] lg:col-span-12 xl:col-span-8">
                        <div>
                            {/* Optional Custom Legend */}
                            <div className="flex justify-between items-center gap-4">
                                <div>
                                    <h3 className="text-[#202224] text-[24px] font-nunito not-italic font-bold mb-4">
                                        Subscription Performance
                                    </h3>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-[#5286F8] rounded-full"></span>
                                        <span className="text-[12px] font-semibold text-[rgba(43,48,52,0.75)] font-nunito not-italic">
                                            Total Plans
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-[#FF7B43] rounded-full"></span>
                                        <span className="text-[12px] font-semibold text-[rgba(43,48,52,0.75)]">
                                            New Plans
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <Chart
                                type="bar"
                                series={subscriptionPerformanceData}
                                xAxis={subscriptionPerformanceCategories}
                                height={300}
                                className="!font-nunito"
                                customOptions={{
                                    plotOptions: {
                                        bar: {
                                            columnWidth: '20px',
                                            borderRadius: 4,                                                                        
                                        },
                                    },
                                    colors: ['#5286F8', '#FF7B43'],
                                    legend: { show: false },
                                    yaxis: {
                                        labels: {
                                            formatter: (value) => Math.round(value).toString(),
                                        },
                                    },
                                }}
                            />
                        </div>
                    </Card>

                    {/* Donut Chart */}
                    <Card className="bg-white border border-[#B9B9B9] rounded-[14px] lg:col-span-12 xl:col-span-4">
                        <div className="relative flex items-center justify-center h-[362px]">
                            {/* Main Donut Chart */}
                            <Chart
                                type="donut"
                                series={subscriptionDistributionData}
                                height={400}
                                customOptions={{
                                    colors: ['#1CCAB8', '#4393FF', '#FF8743', '#FFD56D'],
                                    legend: { show: false },
                                    plotOptions: {
                                        pie: { donut: { size: '65%' } },
                                    },
                                }}
                            />
                            {/* Inner Donut Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
                                <Chart
                                    type="donut"
                                    series={subscriptionDistributionData}
                                    height={200}
                                    customOptions={{
                                        colors: ['#1CCAB8', '#4393FF', '#FF8743', '#FFD56D'],
                                        legend: { show: false },
                                        dataLabels: { enabled: false },
                                        stroke: { width: 0 },
                                        plotOptions: {
                                            pie: { donut: { size: '90%' } },
                                        },
                                        tooltip: { enabled: false },
                                    }}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Section 8: User Table */}
            <div className="mb-8">
                <div className="">
                    <DataTable
                        columns={userColumns}
                        data={userData}
                        loading={false}
                        pageSizes={[10, 25, 50]}
                        pagingData={{
                            total: userData.length,
                            pageIndex: 1,
                            pageSize: 10,
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default Dashboard