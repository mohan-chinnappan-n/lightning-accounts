<aura:application >


    <link href="/resource/bootstrap/" rel="stylesheet"/>

    <div class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <a href="#" class="navbar-brand"> Lightning Accounts</a>
            </div>
        </div>
    </div>

    <div class="container">

        <div class="row">
            <div class="col-sm-8">
                <mohansundar:AcctOppty/>

            </div>


            <div class="col-sm-3">
                <mohansundar:AcctDetails/>
                <mohansundar:newOppty/>

            </div>
        </div>

    </div>

</aura:application>
