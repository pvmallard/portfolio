// import './SkillRing.css'
import { PieChart } from '@mui/x-charts/PieChart';

export default function SkillRing(){ /*{title, value}) {*/
    return (
        <figure>
            <PieChart
                colors={['red', 'blue', 'green']}
                series={[
                    {
                        data: [
                            { id: 0, value: 70, label: 'Web Development' },
                            { id: 1, value: 50, label: 'Game Design' },
                            { id: 2, value: 30, label: 'Graphic Design' }
                        ],
                        innerRadius: 40,
                        cx: 200
                    },
                ]}
                height={200}
                width={400}
                slotProps={{
                    legend: { hidden: true },
                }}
            />
            <figcaption>Skills Chart</figcaption>
        </figure>
    )
}