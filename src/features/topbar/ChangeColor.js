import variables from '../../scss/variables/_colors.scss'

export const changeColor=(color)=>{
	if(color=='black'){
		console.log(variables.primary='#000000')
		return;
	}
	console.log(variables.primary='#0c2233')
}
