import { NgModule, ViewChildren, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './index/homepage/homepage.component';
import { IndextabmenswearComponent } from './index/indextabmenswear/indextabmenswear.component';
import { IndextabwomenswearComponent } from './index/indextabwomenswear/indextabwomenswear.component';
import { IndextabboyskidswearComponent } from './index/indextabboyskidswear/indextabboyskidswear.component';
import { IndextabgirlskidswearComponent } from './index/indextabgirlskidswear/indextabgirlskidswear.component';
import { LogintabpageComponent } from './index/login/logintabpage/logintabpage.component';
import { LoginwholesalerloginComponent } from './index/login/loginwholesalerlogin/loginwholesalerlogin.component';
import { LoginretialerloginComponent } from './index/login/loginretialerlogin/loginretialerlogin.component';
import { RegisterTabComponent } from './index/register/register-tab/register-tab.component';
import { WholesalerregisterComponent } from './index/register/wholesalerregister/wholesalerregister.component';
import { RetailerregisterComponent } from './index/register/retailerregister/retailerregister.component';
import { IndexproductvarietydatailComponent } from './index/indexproductvarietydatail/indexproductvarietydatail.component';
import { WholesalerlogoutGuard } from './services/wholesaler/wholesalerlogout.guard'
import { RetailerlogoutGuard } from './services/retailer/retailerlogout.guard'
import { RetailerloginGuard } from './services/retailer/retailerlogin.guard'
import { WholesalerloginGuard } from './services/wholesaler/wholesalerlogin.guard'
import { AdminLoginGuard } from './services/admin/guard/admin-login.guard'
import { AdminLogoutGuard } from './services/admin/guard/admin-logout.guard'
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { IndexcheckoutComponent } from './index/indexcheckout/indexcheckout.component';
import { IndexageBasedproductsComponent } from './index/indexage-basedproducts/indexage-basedproducts.component';
import { IndexproductdetailsComponent } from './index/indexproductdetails/indexproductdetails.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { AdminCategoryAddComponent } from './admin/admin-category-add/admin-category-add.component';
import { AdminCategoryViewComponent } from './admin/admin-category-view/admin-category-view.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { WholesalerdashboardComponent } from './wholesaler/wholesalerdashboard/wholesalerdashboard.component';
import { ListedclothesComponent } from './index/listedclothes/listedclothes.component';
import { IndexdashboardComponent } from './index/indexdashboard/indexdashboard.component';
import { IndexaddclothesComponent } from './index/indexaddclothes/indexaddclothes.component';
import { CustomerRequestComponent } from './index/customer-request/customer-request.component';
import { SampleRequestComponent } from './index/sample-request/sample-request.component';
import { AdminaddfiltersComponent } from './admin/adminaddfilters/adminaddfilters.component';
import { AdminaddproductSpecificationComponent } from './admin/adminaddproduct-specification/adminaddproduct-specification.component';
import { AdminbulkrequestComponent } from './admin/adminbulkrequest/adminbulkrequest.component';
import { AdminsampleRequestComponent } from './admin/adminsample-request/adminsample-request.component';
import { AdminreviewComponent } from './admin/adminreview/adminreview.component';
import { WholesalerMainComponent } from './wholesaler/wholesaler-main/wholesaler-main.component';
import { ProductAddComponent } from './wholesaler/product-add/product-add.component';
import { ProductManageComponent } from './wholesaler/product-manage/product-manage.component';
import { ManageCategoryComponent } from './admin/manage-category/manage-category.component';
import { ManageFiltersComponent } from './admin/manage-filters/manage-filters.component';
import { ManageProductSpecificationComponent } from './admin/manage-product-specification/manage-product-specification.component';
import { OrderstatusComponent } from './admin/orderstatus/orderstatus.component';
import { ManageorderstatusComponent } from './admin/manageorderstatus/manageorderstatus.component';
import { OrderviewComponent } from './admin/orderview/orderview.component';
import { AdminAddDiscountCodeComponent } from './admin/admin-add-discount-code/admin-add-discount-code.component';
import { AdminManageDiscountCodeComponent } from './admin/admin-manage-discount-code/admin-manage-discount-code.component';
import { AdminAddBrandComponent } from './admin/admin-add-brand/admin-add-brand.component';
import { AdminManageBrandComponent } from './admin/admin-manage-brand/admin-manage-brand.component';
import { SellerforgotComponent } from './index/forgot/sellerforgot/sellerforgot.component';
import { WholesalerforgotComponent } from './index/forgot/wholesalerforgot/wholesalerforgot.component';
import { ForgotTAbComponent } from './index/forgot/forgot-tab/forgot-tab.component';
import { WholesalerorderviewComponent } from './wholesaler/wholesalerorderview/wholesalerorderview.component';
import { WholesalerstockmanageComponent } from './wholesaler/wholesalerstockmanage/wholesalerstockmanage.component';
import { TermsComponent } from './index/terms/terms.component';
import { PrivacyComponent } from './index/privacy/privacy.component';
import { MyOrdersComponent } from './index/my-orders/my-orders.component';
import { IndexMyAccountsComponent } from './index/index-my-accounts/index-my-accounts.component';
import { BuyerprofileComponent } from './index/buyerprofile/buyerprofile.component';
import { AdminSetCommissionComponent } from './admin/admin-set-commission/admin-set-commission.component';
import { AdminVerifyDocumentComponent } from './admin/admin-verify-document/admin-verify-document.component';
import { WholesalerUploadDocumentsComponent } from './wholesaler/wholesaler-upload-documents/wholesaler-upload-documents.component';
import { RetailerDocumentsComponent } from './index/retailer-documents/retailer-documents.component';
import { AdminDataComponent } from './admin/admin-data/admin-data.component';
import { WholesalerCompletedorderComponent } from './wholesaler/wholesaler-completedorder/wholesaler-completedorder.component';



const routes: Routes = [
    {
        path: '', component: HomepageComponent,
        // children: [
        // {path: '', redirectTo: '', pathMatch: 'full'},
        // {path: ':name', component: IndextabmenswearComponent},


        // ]
    },
    {
        path: 'productvarietydetails/:id', component: IndexproductvarietydatailComponent
    },
    {
        path: 'productvarietydetails', component: IndexproductvarietydatailComponent
    },
    {
        path: 'search/:search', component: IndexproductvarietydatailComponent
    },
    {
        path: 'productdetails/:id', component: IndexproductdetailsComponent
    },
    {
        path: 'terms', component: TermsComponent
    },

    {
        path: 'privacy', component: PrivacyComponent
    },
    {
        path: 'login', component: LogintabpageComponent,
        children: [
            { path: '', redirectTo: 'wholesaler', pathMatch: 'full' },
            { path: 'wholesaler', component: LoginwholesalerloginComponent, canActivate: [WholesalerlogoutGuard] },
            { path: 'retailer', component: LoginretialerloginComponent, canActivate: [RetailerlogoutGuard] },
        ]
    },
    {
        path: 'register', component: RegisterTabComponent,
        children: [
            { path: '', redirectTo: 'wholesaler', pathMatch: 'full' },
            { path: 'wholesaler', component: WholesalerregisterComponent, canActivate: [WholesalerlogoutGuard] },
            { path: 'retailer', component: RetailerregisterComponent, canActivate: [RetailerlogoutGuard] },
        ]
    },


    {
        path: 'forgot', component: ForgotTAbComponent,
        children: [
            { path: '', redirectTo: 'seller', pathMatch: 'full' },
            { path: 'seller', component: WholesalerforgotComponent, },
            { path: 'buyer', component: SellerforgotComponent, },
        ]
    },




    // {
    //     path: 'customer-request', component: CustomerRequestComponent
    // },
    // ////////////////////////////// sample requests will be shown here in the form of table
    // {
    //     path: 'sample-request', component: SampleRequestComponent
    // },

    {
        // path: 'myOrders', component: MyOrdersComponent, canActivate:[RetailerloginGuard]
        path: 'customer-request', component: CustomerRequestComponent
    },
    // {
    //     path: 'myOrders', component: MyOrdersComponent
    // },
    {
        path: 'myAccounts', component: IndexMyAccountsComponent, canActivateChild:[RetailerloginGuard], canActivate:[RetailerloginGuard],

        children: [
            { path: '', redirectTo: 'Orders', pathMatch: 'full' },
            { path: 'Orders', component: MyOrdersComponent },
            { path: 'buyerprofile', component: BuyerprofileComponent },
            { path: 'documents', component: RetailerDocumentsComponent },
        ]
    },
    ////////////////////////////// sample requests will be shown here in the form of table
    {
        path: 'sample-request', component: SampleRequestComponent
    },
    {
        path: 'productCategoryWiseViewAll', component: IndexageBasedproductsComponent
    },

    {
        path: 'checkout', component: IndexcheckoutComponent, canActivate: [RetailerloginGuard]
    },
    // {
    //     path: 'listedclothes', component: ListedclothesComponent
    // },
    // {
    //     path: 'addclothes', component: IndexaddclothesComponent
    // },






    ///////////////////////////////////admin routes
    { path: 'login/admin', component: LoginComponent, canActivate: [AdminLogoutGuard] },
    { path: 'register/admin', component: RegisterComponent, canActivate: [AdminLogoutGuard] },
    {
        path: 'admin', component: AdminMainComponent, canActivateChild: [AdminLoginGuard],
        children: [
            { path: '', redirectTo: 'category/add', pathMatch: 'full' },
            { path: 'category', redirectTo: 'category/add', pathMatch: 'full' },
            { path: 'category/add', component: AdminCategoryAddComponent },
            { path: 'category/view', component: ManageCategoryComponent },
            { path: 'dashboard', component: AdminHomepageComponent },
            { path: 'admin-data', component: AdminDataComponent },
            { path: 'addFilter', component: AdminaddfiltersComponent },
            { path: 'productspecification', component: AdminaddproductSpecificationComponent },
            // { path: 'samplerequest', component: AdminsampleRequestComponent },
            // { path: 'bulkrequest', component: AdminbulkrequestComponent },
            { path: 'review', component: AdminreviewComponent },
            { path: 'manageFilter', component: ManageFiltersComponent },
            { path: 'manageProductSpecification', component: ManageProductSpecificationComponent },
            { path: 'orderstatus', component: OrderstatusComponent },
            { path: 'manageorderstatus', component: ManageorderstatusComponent },
            { path: 'order', redirectTo: 'order/view', pathMatch: 'full' },
            { path: 'order/view', component: OrderviewComponent },
            { path: 'discount', redirectTo: 'discount/view', pathMatch: 'full' },
            { path: 'discount/add', component: AdminAddDiscountCodeComponent },
            { path: 'discount/view', component: AdminManageDiscountCodeComponent },
            { path: 'brand', redirectTo: 'brand/add', pathMatch: 'full' },
            { path: 'brand/add', component: AdminAddBrandComponent },
            { path: 'brand/view', component: AdminManageBrandComponent },
            { path: 'commission', component: AdminSetCommissionComponent },
            { path: 'verifyDocuments', component: AdminVerifyDocumentComponent },
        ]
    },


    ///////////////////////////wholesaler routes
    { path: 'index/dashboard', component: IndexdashboardComponent },

    ///////////////////////////retailer routes
    {
        path: 'wholesaler', component: WholesalerMainComponent, canActivateChild: [WholesalerloginGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: WholesalerdashboardComponent },
            { path: 'product', redirectTo: "product/add", pathMatch: "full" },
            { path: 'document', component:WholesalerUploadDocumentsComponent },
            { path: 'product/add', component: ProductAddComponent },
            { path: 'product/manage', component: ProductManageComponent },
            { path: 'order', redirectTo: 'order/view', pathMatch: 'full' },
            { path: 'order/view', component: WholesalerorderviewComponent },
            { path: 'stock', redirectTo: 'stock/view', pathMatch: 'full' },
            { path: 'stock/view', component: WholesalerstockmanageComponent },
            { path: 'wholesaler-completedorder', component: WholesalerCompletedorderComponent },

            
        ]
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
