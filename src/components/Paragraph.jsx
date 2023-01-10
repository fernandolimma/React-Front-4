import "./Paragraph.css"

//No parametro da função Paragraph abaixo recebemos os caracteres digitados via props do componente APP, é abaixo usamos  na tag P dentro do da tag span abaixo
export function Paragraph(props) {
  return (
    <div>
      <p>
        Este texto contém <span>{props.text}</span> caracteres.
      </p>
    </div>
  )
}
