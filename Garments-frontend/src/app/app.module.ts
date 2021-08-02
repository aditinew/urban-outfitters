import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { AngularEditorModule } from '@kolkov/angular-editor';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexHeaderComponent } from './index/index-header/index-header.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { WholesalerHeaderComponent } from './wholesaler/wholesaler-header/wholesaler-header.component';
import { WholesalerFooterComponent } from './wholesaler/wholesaler-footer/wholesaler-footer.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { IndexFooterComponent } from './index/index-footer/index-footer.component';
import { HomepageComponent } from './index/homepage/homepage.component';
import { HeadernavlinksComponent } from './index/headernavlinks/headernavlinks.component';
import { AboutustextComponent } from './index/aboutustext/aboutustext.component';
import { IndexgoogleiosdescComponent } from './index/indexgoogleiosdesc/indexgoogleiosdesc.component';
import { IndexlatesttrendsComponent } from './index/indexlatesttrends/indexlatesttrends.component';
import { ReviewsandratingsComponent } from './index/reviewsandratings/reviewsandratings.component';
import { IndextabmenswearComponent } from './index/indextabmenswear/indextabmenswear.component';
import { IndextabwomenswearComponent } from './index/indextabwomenswear/indextabwomenswear.component';
import { IndextabboyskidswearComponent } from './index/indextabboyskidswear/indextabboyskidswear.component';
import { IndextabgirlskidswearComponent } from './index/indextabgirlskidswear/indextabgirlskidswear.component';
import { RegisterTabComponent } from './index/register/register-tab/register-tab.component';
import { WholesalerregisterComponent } from './index/register/wholesalerregister/wholesalerregister.component';
import { RetailerregisterComponent } from './index/register/retailerregister/retailerregister.component';
import { LogintabpageComponent } from './index/login/logintabpage/logintabpage.component';
import { LoginwholesalerloginComponent } from './index/login/loginwholesalerlogin/loginwholesalerlogin.component';
import { LoginretialerloginComponent } from './index/login/loginretialerlogin/loginretialerlogin.component';
import { IndexproductvarietydatailComponent } from './index/indexproductvarietydatail/indexproductvarietydatail.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { IndexcheckoutComponent } from './index/indexcheckout/indexcheckout.component';
import { IndexageBasedproductsComponent } from './index/indexage-basedproducts/indexage-basedproducts.component';
import { IndexproductdetailsComponent } from './index/indexproductdetails/indexproductdetails.component';
import { AdminCategoryAddComponent } from './admin/admin-category-add/admin-category-add.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { AdminCategoryViewComponent } from './admin/admin-category-view/admin-category-view.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { WholesalerSidebarComponent } from './wholesaler/wholesaler-sidebar/wholesaler-sidebar.component';
import { WholesalerdashboardComponent } from './wholesaler/wholesalerdashboard/wholesalerdashboard.component';
import { IndexdashboardComponent } from './index/indexdashboard/indexdashboard.component';
import { IndexsidebarComponent } from './index/indexsidebar/indexsidebar.component';
import { ListedclothesComponent } from './index/listedclothes/listedclothes.component';
import { IndexaddclothesComponent } from './index/indexaddclothes/indexaddclothes.component';
import { CustomerRequestComponent } from './index/customer-request/customer-request.component';
import { SampleRequestComponent } from './index/sample-request/sample-request.component';
import { BulkRequestComponent } from './index/bulk-request/bulk-request.component';
import { AdminaddfiltersComponent } from './admin/adminaddfilters/adminaddfilters.component';
import { AdminaddproductSpecificationComponent } from './admin/adminaddproduct-specification/adminaddproduct-specification.component';
import { AdminsampleRequestComponent } from './admin/adminsample-request/adminsample-request.component';
import { AdminbulkrequestComponent } from './admin/adminbulkrequest/adminbulkrequest.component';
import { AdminreviewComponent } from './admin/adminreview/adminreview.component';
import { ProductAddComponent } from './wholesaler/product-add/product-add.component';
import { WholesalerMainComponent } from './wholesaler/wholesaler-main/wholesaler-main.component';
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
import { WholesalerforgotComponent } from './index/forgot/wholesalerforgot/wholesalerforgot.component';
import { SellerforgotComponent } from './index/forgot/sellerforgot/sellerforgot.component';
import { ForgotTAbComponent } from './index/forgot/forgot-tab/forgot-tab.component';
import { WholesalerorderviewComponent } from './wholesaler/wholesalerorderview/wholesalerorderview.component';
import { WholesalerstockmanageComponent } from './wholesaler/wholesalerstockmanage/wholesalerstockmanage.component';
import { TermsComponent } from './index/terms/terms.component';
import { PrivacyComponent } from './index/privacy/privacy.component';
import { RefundpolicyComponent } from './index/refundpolicy/refundpolicy.component';
import { IndexafterloginheaderComponent } from './indexafterloginheader/indexafterloginheader.component';
import { MyOrdersComponent } from './index/my-orders/my-orders.component';
import { IndexMyAccountsComponent } from './index/index-my-accounts/index-my-accounts.component';
import { BuyerprofileComponent } from './index/buyerprofile/buyerprofile.component';
import { SliderComponent } from './index/slider/slider.component';
import { AdminSetCommissionComponent } from './admin/admin-set-commission/admin-set-commission.component';
import { AdminVerifyDocumentComponent } from './admin/admin-verify-document/admin-verify-document.component';
import { WholesalerUploadDocumentsComponent } from './wholesaler/wholesaler-upload-documents/wholesaler-upload-documents.component';
import { RetailerDocumentsComponent } from './index/retailer-documents/retailer-documents.component';
import { AdminDataComponent } from './admin/admin-data/admin-data.component';
import { WholesalerCompletedorderComponent } from './wholesaler/wholesaler-completedorder/wholesaler-completedorder.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexHeaderComponent,
    AdminHeaderComponent,
    WholesalerHeaderComponent,
    WholesalerFooterComponent,
    AdminFooterComponent,
    IndexFooterComponent,
    HomepageComponent,
    HeadernavlinksComponent,
    AboutustextComponent,
    IndexgoogleiosdescComponent,
    IndexlatesttrendsComponent,
    ReviewsandratingsComponent,
    IndextabmenswearComponent,
    IndextabwomenswearComponent,
    IndextabboyskidswearComponent,
    IndextabgirlskidswearComponent,
    RegisterTabComponent,
    WholesalerregisterComponent,
    RetailerregisterComponent,
    LogintabpageComponent,
    LoginwholesalerloginComponent,
    LoginretialerloginComponent,
    IndexproductvarietydatailComponent,
    LoginComponent,
    RegisterComponent,
    IndexcheckoutComponent,
    IndexageBasedproductsComponent,
    IndexproductdetailsComponent,
    AdminCategoryAddComponent,
    AdminMainComponent,
    AdminCategoryViewComponent,
    AdminHomepageComponent,
    AdminSidebarComponent,
    WholesalerSidebarComponent,
    WholesalerdashboardComponent,
    IndexdashboardComponent,
    IndexsidebarComponent,
    ListedclothesComponent,
    IndexaddclothesComponent,
    CustomerRequestComponent,
    SampleRequestComponent,
    BulkRequestComponent,
    AdminaddfiltersComponent,
    AdminaddproductSpecificationComponent,
    AdminsampleRequestComponent,
    AdminbulkrequestComponent,
    AdminreviewComponent,
    ProductAddComponent,
    WholesalerMainComponent,
    ProductManageComponent,
    ManageCategoryComponent,
    ManageFiltersComponent,
    ManageProductSpecificationComponent,
    OrderstatusComponent,
    ManageorderstatusComponent,
    OrderviewComponent,
    AdminAddDiscountCodeComponent,
    AdminManageDiscountCodeComponent,
    AdminAddBrandComponent,
    AdminManageBrandComponent,
    WholesalerforgotComponent,
    SellerforgotComponent,
    ForgotTAbComponent,
    WholesalerorderviewComponent,
    WholesalerstockmanageComponent,
    TermsComponent,
    PrivacyComponent,
    RefundpolicyComponent,
    IndexafterloginheaderComponent,
    MyOrdersComponent,
    IndexMyAccountsComponent,
    BuyerprofileComponent,
    SliderComponent,
    AdminSetCommissionComponent,
    AdminVerifyDocumentComponent,
    WholesalerUploadDocumentsComponent,
    RetailerDocumentsComponent,
    AdminDataComponent,
    WholesalerCompletedorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxImageZoomModule,
    AngularEditorModule
  ],
  exports: [
    NgxImageZoomModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
