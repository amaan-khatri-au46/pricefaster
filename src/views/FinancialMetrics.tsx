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
import type { ColumnDef } from '@tanstack/react-table'
import DownloadIcon from '@/components/ui/DownloadIcon'

interface FinancialMetricsData {
    id: string
    metricName: string
    month: string
    plan: string
    location: string
    currentValue: string
    lastMonth: string
    metricsChange: string
}

const FinancialMetrics = () => {
    const [searchTerm, setSearchTerm] = useState('')

    // Mock data for financial metrics based on the image
    const financialMetricsData: FinancialMetricsData[] = [
        {
            id: '1',
            metricName: 'Monthly Recurring Revenue (MRR)',
            month: 'January, 2024',
            plan: 'Free',
            location: 'City, State',
            currentValue: '$150,000',
            lastMonth: '$150,000',
            metricsChange: '3.45%'
        },
        {
            id: '2',
            metricName: 'Revenue per Plan Tier',
            month: 'January, 2024',
            plan: 'Premium',
            location: 'City, State',
            currentValue: '$25,000 (Pro)',
            lastMonth: '$25,000 (Pro)',
            metricsChange: '3.45%'
        },
        {
            id: '3',
            metricName: 'Refund Requests Issued',
            month: 'January, 2024',
            plan: 'Pro',
            location: 'City, State',
            currentValue: '5 ($500)',
            lastMonth: '5 ($500)',
            metricsChange: '3.45%'
        },
        {
            id: '4',
            metricName: 'Lifetime Value (LTV) per Plan',
            month: 'January, 2024',
            plan: 'Free',
            location: 'City, State',
            currentValue: '$1,200 (Premium)',
            lastMonth: '$1,200 (Premium)',
            metricsChange: '3.45%'
        },
        {
            id: '5',
            metricName: 'Conversion Rate (Free to Paid)',
            month: 'January, 2024',
            plan: 'Free',
            location: 'City, State',
            currentValue: '4.8%',
            lastMonth: '4.8%',
            metricsChange: '3.45%'
        }
    ]

    const filteredData = financialMetricsData.filter(metric =>
        metric.metricName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        metric.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        metric.location.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Table columns definition
    const columns: ColumnDef<FinancialMetricsData>[] = [
        {
            header: 'Metric Name',
            accessorKey: 'metricName',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="flex items-center">
                        <span className="">{row.metricName}</span>
                    </div>
                )
            }
        },
        {
            header: 'Month',
            accessorKey: 'month',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.month}</span>
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
            header: 'Location',
            accessorKey: 'location',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.location}</span>
            }
        },
        {
            header: 'Current Value',
            accessorKey: 'currentValue',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.currentValue}</span>
            }
        },
        {
            header: 'Last Month',
            accessorKey: 'lastMonth',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.lastMonth}</span>
            }
        },
        {
            header: 'Metrics Change',
            accessorKey: 'metricsChange',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.metricsChange}</span>
            }
        }
    ]

    return (
        <div className="min-h-screen w-full">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
                <h1 className="text-[#202224] font-nunito text-[24px] font-bold leading-none tracking-[-0.114px]">Financial Metrics</h1>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:items-center">
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
                    <div className='flex flex-row gap-2 w-full sm:w-auto justify-end'>
                    <Button variant="solid" size="sm" className="flex items-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF] ">
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
                    data={filteredData}
                    loading={false}
                    pageSizes={[10, 25, 50]}
                    pagingData={{
                        total: filteredData.length,
                        pageIndex: 1,
                        pageSize: 10,
                    }}
                />
            </div>
        </div>
    )
}

export default FinancialMetrics 