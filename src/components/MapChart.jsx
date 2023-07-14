
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";

const MapChart = () => (
    <div >
        <ComposableMap
            projectionConfig={{
                rotate: [-10, 0 , 0],
                center: [-8, -3],
                scale: 200
            }}
            style={{width:"100%",height:"100%",marginTop:"270px"}}>
            <Geographies geography="/features.json" fill="#2C065D" stroke="#FFFFFF"
                strokeWidth={0.5}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[32.8644, 39.9272]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
                    {"Ankara"}
                </text>
            </Annotation>
        </ComposableMap>
    </div>
);
export default MapChart;