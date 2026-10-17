import { ImageResponse } from "next/og";
export const alt="Wise Ultima — Predict. Prevent. Act.";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{display:"flex",width:"100%",height:"100%",background:"#f3f2f8",padding:"70px",flexDirection:"column",justifyContent:"space-between",color:"#0b0b14"}}><div style={{display:"flex",fontSize:32}}>wise ultima · by Wise Work</div><div style={{display:"flex",fontSize:100,letterSpacing:-6}}>Predict. Prevent.</div><div style={{display:"flex",fontSize:110,letterSpacing:-6,color:"#aa10d0"}}>Act.</div><div style={{display:"flex",fontSize:24}}>Intelligent Operations, Simplified!</div></div>,size);}
