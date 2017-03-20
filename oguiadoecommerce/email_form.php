<form name="form1" method="post" action="email.php" class='contact-form'>
  <table width="100" border="0" cellspacing="0" cellpadding="0" align="center">
    <tr class="name"> 
      <td valign="top" width="100" nowrap><font class="texto">Nome:</font></td>
      <td> 
        <input type="text" name="nome" size="34">
      </td>
    </tr>
   <tr class="name"> 
      <td valign="top" width="100" nowrap><font class="texto">Sobre Nome:</font></td>
      <td> 
        <input class="form_campos" type="text" name="sobrenome" size="20">
      </td>
    </tr>
   <!-- <tr bgcolor="#F4F4F4"> 
      <td valign="top" width="100" nowrap><font class="texto">Estado:</font></td>
      <td> 
        <input class="form_campos" type="text" name="estado" size="11">
      </td>
    </tr>-->
    <tr class="email"> 
      <td valign="top" width="100" nowrap><font class="texto">E-mail:</font></td>
      <td> 
        <input type="text" name="email" size="34">
      </td>
    </tr>
    <!--<tr bgcolor="#F4F4F4"> 
      <td valign="top" width="100" nowrap><font class="texto">Assunto:</font></td>
      <td> 
        <select class="form_campos" name="assunto">
          <option class="form_campos" value="Opinião" selected>Opinião</option>
          <option class="form_campos" value="Sugestão">Sugestão</option>
          <option class="form_campos" value="Parceria">Parceria</option>
          <option class="form_campos" value="Reclamação">Reclamação</option>
          <option class="form_campos" value="Outros">Outros</option>
        </select>
      </td>
    </tr>
    <tr bgcolor="#EFEFEF"> 
      <td valign="top" width="100" nowrap><font class="texto">Mensagem:</font></td>
      <td> 
        <textarea class="form_campos" name="mensagem" cols="34" rows="4"></textarea>
      </td>
    </tr>-->
    <tr> 
      <td colspan="2" valign="middle"> 
	  	<br>
        <div align="center" "btn-wr text-primary"> 
          <input class="btn btn-primary" type="submit" name="Enviar" value="Enviar Contato">
          <!--<input class="btn btn-primary" type="reset" name="Limpar" value="Limpar">-->
        </div>
      </td>
    </tr>
  </table>
</form>
